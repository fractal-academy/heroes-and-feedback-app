import { useState } from 'react'
import { Button, Modal, message, Spin, Typography } from 'antd'
import { GallerySelect } from 'app/components'
import { getCollectionRef, setData, firestore } from 'app/services'
import { BADGES, PERSONAL_BADGES, USERS } from 'app/constants/collections'
import { BadgeSimpleView } from 'app/domains/Badge/components/views'
import { TrophyOutlined } from '@ant-design/icons'
import { getBatchOfFixedSizeData } from 'app/domains/PersonalBadge/helpers'
import { Row, Col, Box } from '@qonsoll/react-design'
import './PersonalBadgeSimpleForm.style.css'

const PersonalBadgeSimpleForm = (props) => {
  const { userId, currentExp, withText } = props

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
        .catch((e) => {
          console.log(e)
          setLoadingBatch(false)
        })
    }
  }

  const onScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !(dataBatch.length % 4)
    ) {
      console.log('scroll')
      fetchMoreData(lastKey)
    }
  }

  const handleOk = () => {
    const newId = firestore.collection(PERSONAL_BADGES).doc().id
    getCollectionRef(PERSONAL_BADGES)
      .where('badgeId', '==', selectedBadge.id)
      .where('userId', '==', userId)
      .get()
      .then((res) => {
        if (res.docs.length) {
          const badgeToLvlUp = res.docs[0].data()
          if (badgeToLvlUp.currentLvl < badgeToLvlUp.maxLvl) {
            setData(PERSONAL_BADGES, badgeToLvlUp.id, {
              currentLvl: badgeToLvlUp.currentLvl + 1
            })
            setData(USERS, userId, {
              currentExp: Number(currentExp) + Number(selectedBadge.experience)
            })
            message.success('Badge lvl was successfully upgraded')
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
          message.success('Badge was successfully assigned to user')
        }
      })
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      {withText ? (
        <Box display="flex" onClick={showModal} className="badge-dropdown">
          <Box className="badge-dropdown" mr={1}>
            <TrophyOutlined />
          </Box>
          <Typography className="badge-dropdown">Prize</Typography>
        </Box>
      ) : (
        <Button
          shape="circle"
          icon={<TrophyOutlined />}
          onClick={showModal}
          className="badge-assign-button"
        />
      )}

      {dataBatch && (
        <Modal
          destroyOnClose
          title="Assign new badge"
          visible={isModalVisible}
          width="60vw"
          onOk={handleOk}
          onCancel={handleCancel}>
          <GallerySelect
            className="galery-scroll"
            data={dataBatch}
            Component={BadgeSimpleView}
            setSelected={setSelectedBadge}
            selected={selectedBadge}
            onScroll={onScroll}
          />
          {loadingBatch && (
            <Row h="center">
              <Col cw="auto">
                <Spin />
              </Col>
            </Row>
          )}
        </Modal>
      )}
    </>
  )
}

export default PersonalBadgeSimpleForm
