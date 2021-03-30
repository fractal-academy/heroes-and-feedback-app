import { useState } from 'react'
import { Modal, Button, Form } from 'antd'
import { Box } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { USERS } from 'app/constants/collections'
import { firestore } from 'app/services/Firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { ProjectMemberForm } from 'app/domains/ProjectMember/components/form'

const ProjectMemberCombined = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()

  const session = useUserAuthContext()
  const [users] = useCollectionData(firestore.collection(USERS))

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleOk = async (e) => {
    form.validateFields()

    const { user, projectRole } = form.getFieldsValue()

    if (user && projectRole) {
      form.submit()

      setIsModalVisible(false)
    }
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const accessRules = session.userDBData.role === 'Superadmin'

  return (
    <>
      {accessRules && (
        <Box textAlign="center" my={4}>
          <Button type="primary" onClick={showModal}>
            Invite members
          </Button>
        </Box>
      )}

      {users && (
        <Modal
          keyboard
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
