import { useState } from 'react'
import { Modal, Button, Form } from 'antd'
import { USERS } from 'app/constants/collections'
import { Box } from '@qonsoll/react-design'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore } from 'app/services/Firestore'
import { ProjectMemberForm } from 'app/domains/ProjectMember/components/form'

const ProjectMemberCombined = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const [users] = useCollectionData(firestore.collection(USERS))

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = (e) => {
    form.submit()

    setIsModalVisible(false)

    // form.validateFields()

    // const validationErrors = Object.values(form.getFieldsError())

    // if (!validationErrors.find((e) => e === undefined)) {
    // }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  return (
    <>
      <Box textAlign="center" mt={4}>
        <Button type="primary" onClick={showModal}>
          Invite members
        </Button>
      </Box>
      {users && (
        <Modal
          title="Invite new member to the project"
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Submit"
          cancelText="Cancel">
          <ProjectMemberForm form={form} />
        </Modal>
      )}
    </>
  )
}

export default ProjectMemberCombined
