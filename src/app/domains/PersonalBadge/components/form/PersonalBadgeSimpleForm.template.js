import { useState } from 'react'
import { Button, Modal } from 'antd'
import { GallerySelect } from 'app/components'
import { addData, getCollectionRef, setData, firestore } from 'app/services'
import { BADGES, PERSONAL_BADGES } from 'app/constants/collections'
import { BadgeSimpleView } from 'app/domains/Badge/components/views'

const PersonalBadgeSimpleForm = (props) => {
  const { userId } = props

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [badges, setBadges] = useState([])
  const [selectedBadge, setSelectedBadge] = useState('')

  const showModal = () => {
    getCollectionRef(BADGES)
      .get()
      .then((res) => res.docs.map((item) => item.data()))
      .then((res) => {
        setBadges(res)
        setIsModalVisible(true)
      })
  }

  const handleOk = () => {
    const newId = firestore.collection(BADGES).doc().id
    setData(PERSONAL_BADGES, newId, {
      userId: userId,
      id: newId,
      badgeId: selectedBadge.id,
      name: selectedBadge.name,
      image: selectedBadge.image,
      currentLvl: 1,
      description: selectedBadge.description
    })

    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      {badges && (
        <Modal
          title="Assign new badge"
          visible={isModalVisible}
          width="60vw"
          onOk={handleOk}
          onCancel={handleCancel}>
          <GallerySelect
            data={badges}
            Component={BadgeSimpleView}
            setSelected={setSelectedBadge}
            selected={selectedBadge}
          />
        </Modal>
      )}
    </>
  )
}

export default PersonalBadgeSimpleForm
