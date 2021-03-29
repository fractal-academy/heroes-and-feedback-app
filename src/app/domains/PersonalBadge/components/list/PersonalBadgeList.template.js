import { List } from 'app/components'
import { PERSONAL_BADGES } from 'app/constants/collections'
import { useEffect, useState } from 'react'
import { getBatchOfFixedSizeData } from 'app/domains/PersonalBadge/helpers'
import { Row, Col } from '@qonsoll/react-design'
import { message, Spin } from 'antd'
import { firestore } from 'app/services/Firebase'
import './PersonalBadgeList.style.css'

const PersonalBadgeList = (props) => {
  const { userId, currentUser } = props

  const [dataBatch, setDataBatch] = useState([])
  const [lastKey, setLastKey] = useState('')
  const [loadingBatch, setLoadingBatch] = useState(false)

  const batchSize = 3

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
        .catch((err) => {
          console.log(err)
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

  const onPersonalBadgeDelete = (badgeId) => {
    firestore
      .collection(PERSONAL_BADGES)
      .doc(badgeId)
      .delete()
      .then(() => {
        message.success('Badge was successfully deleted')
      })
      .catch((e) => {
        console.log(e)
        message.error('Error occured during badge deletion')
      })
  }

  const onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !(dataBatch.length % 3)
    ) {
      console.log('scroll')
      fetchMoreData(lastKey)
    }
  }

  return (
    <>
      <>
        {dataBatch && (
          <List
            currentUserId={currentUser}
            type="personalBadge"
            data={dataBatch}
            className="list-scroll"
            onScroll={onScroll}
            onPersonalBadgeDelete={onPersonalBadgeDelete}
          />
        )}
        {loadingBatch && (
          <Row h="center">
            <Col cw="auto">
              <Spin />
            </Col>
          </Row>
        )}
      </>
    </>
  )
}

export default PersonalBadgeList
