import { List } from 'app/components'
import { PERSONAL_BADGES } from 'app/constants/collections'
import { useEffect, useState } from 'react'
import { getBatchOfFixedSizeData } from 'app/domains/PersonalBadge/helpers'
import { Row, Col } from '@qonsoll/react-design'
import { Spin, Button } from 'antd'

const PersonalBadgeList = (props) => {
  const { userId } = props

  const [dataBatch, setDataBatch] = useState([])
  const [lastKey, setLastKey] = useState('')
  const [loadingBatch, setLoadingBatch] = useState(false)

  const fetchMoreData = (key) => {
    if (key.length > 0) {
      setLoadingBatch(true)
      getBatchOfFixedSizeData(2, PERSONAL_BADGES, userId, key)
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
    getBatchOfFixedSizeData(2, PERSONAL_BADGES, userId).then((res) => {
      setDataBatch(res.resData)
      setLastKey(res.lastKey)
    })
  }, [userId])

  return (
    <>
      {dataBatch && (
        <>
          <List type="personalBadge" data={dataBatch} />
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
