import { List } from 'app/components'
import { PERSONAL_BADGES } from 'app/constants/collections'
import { useEffect, useState } from 'react'
import { getBatchOfFixedSizeData } from 'app/domains/PersonalBadge/helpers'
import { Row, Col } from '@qonsoll/react-design'
import { Spin, Button } from 'antd'
import { firestore } from 'app/services/Firebase'

const PersonalBadgeList = (props) => {
  const { userId } = props

  const [dataBatch, setDataBatch] = useState([])
  const [lastKey, setLastKey] = useState('')
  const [loadingBatch, setLoadingBatch] = useState(false)

  const batchSize = 4
  const message = 'Enter personal badge name...'

  const fetchMoreData = (key) => {
    if (key.length > 0) {
      setLoadingBatch(true)
      getBatchOfFixedSizeData(
        batchSize,
        PERSONAL_BADGES,
        { fieldName: 'userId', operator: '==', value: userId },
        key
      )
        .then((res) => {
          setLastKey(res.lastKey)
          setDataBatch(dataBatch.concat(res.resData))
          setLoadingBatch(false)
        })
        .catch((e) => {
          console.log(e)
          setLoadingBatch(false)
        })
    }
  }

  useEffect(() => {
    const unsubscribe = firestore
      .collection(PERSONAL_BADGES)
      .where('userId', '==', userId)
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getBatchOfFixedSizeData(batchSize, PERSONAL_BADGES, {
            fieldName: 'userId',
            operator: '==',
            value: userId
          }).then((res) => {
            setDataBatch(res.resData)
            setLastKey(res.lastKey)
          })
        })
      })

    return () => {
      unsubscribe && unsubscribe()
    }
  }, [userId])

  return (
    <>
      {dataBatch && (
        <>
          <List type="personalBadge" data={dataBatch} message={message} />
        </>
      )}
      {loadingBatch ? (
        <Spin />
      ) : (
        <Row v="center" h="center" marginTop={2}>
          <Col v="center" cw="auto">
            {lastKey.length > 0 && (
              <Button onClick={() => fetchMoreData(lastKey)}>Load More</Button>
            )}
          </Col>
        </Row>
      )}
    </>
  )
}

export default PersonalBadgeList
