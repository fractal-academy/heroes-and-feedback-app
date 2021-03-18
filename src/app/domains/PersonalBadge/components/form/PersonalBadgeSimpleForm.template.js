import { useState } from 'react'
import { Button, Modal, message, Spin } from 'antd'
import { GallerySelect } from 'app/components'
import { getCollectionRef, setData, firestore } from 'app/services'
import { BADGES, PERSONAL_BADGES, USERS } from 'app/constants/collections'
import { BadgeSimpleView } from 'app/domains/Badge/components/views'
import { TrophyOutlined } from '@ant-design/icons'
import { getBatchOfFixedSizeData } from 'app/domains/PersonalBadge/helpers'
import { Row, Col } from '@qonsoll/react-design'
import './PersonalBadgeSimpleForm.style.css'

const PersonalBadgeSimpleForm = (props) => {
  const { userId, currentExp } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [selectedBadge, setSelectedBadge] = useState('')
  const [dataBatch, setDataBatch] = useState([])
  const [lastKey, setLastKey] = useState('')
  const [loadingBatch, setLoadingBatch] = useState(false)

  const batchSize = 4

  const showModal = () => {
    getBatchOfFixedSizeData(batchSize, BADGES).then((res) => {
      setDataBatch(res.resData)
      setLastKey(res.lastKey)
      setIsModalVisible(true)
    })
  }

  const fetchMoreData = (key) => {
    if (key.length > 0) {
      setLoadingBatch(true)
      getBatchOfFixedSizeData(batchSize, BADGES, undefined, key)
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

  const handleOk = () => {
    const newId = firestore.collection(PERSONAL_BADGES).doc().id
    getCollectionRef(PERSONAL_BADGES)
      .where('badgeId', '==', selectedBadge.id)
      .get()
      .then((res) => {
        if (res.docs.length) {
          const badgeToLvlUp = res.docs[0].data()
          if (badgeToLvlUp.currentLvl < badgeToLvlUp.maxLvl) {
            setData(PERSONAL_BADGES, badgeToLvlUp.id, {
              currentLvl: badgeToLvlUp.currentLvl + 1
            })
            setData(USERS, userId, {
              currentExp: currentExp + selectedBadge.experience
            })
          } else {
            message.error('This user already has maximum lvl of this badge')
          }
        } else {
          setData(PERSONAL_BADGES, newId, {
            userId: userId,
            id: newId,
            badgeId: selectedBadge.id,
            name: selectedBadge.name,
            image: selectedBadge.image,
            maxLvl: selectedBadge.maxLvl,
            currentLvl: 1,
            description: selectedBadge.description
          })
          setData(USERS, userId, {
            currentExp: currentExp + selectedBadge.experience
          })
        }
      })
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button
        shape="circle"
        icon={<TrophyOutlined />}
        onClick={showModal}
        className="badge-assign-button"
      />
      {dataBatch && (
        <Modal
          title="Assign new badge"
          visible={isModalVisible}
          width="60vw"
          onOk={handleOk}
          onCancel={handleCancel}>
          <GallerySelect
            data={dataBatch}
            Component={BadgeSimpleView}
            setSelected={setSelectedBadge}
            selected={selectedBadge}
          />
          {loadingBatch ? (
            <Spin />
          ) : (
            <Row v="center" h="center" marginTop={2}>
              <Col v="center" cw="auto">
                {lastKey.length > 0 && (
                  <Button onClick={() => fetchMoreData(lastKey)}>
                    Load More
                  </Button>
                )}
              </Col>
            </Row>
          )}
        </Modal>
      )}
    </>
  )
}

export default PersonalBadgeSimpleForm
