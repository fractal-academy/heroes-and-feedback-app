import { Form } from 'antd'
import { useParams } from 'react-router-dom'
import { PROJECT_MEMBER, USERS } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { firestore, setData } from 'app/services/Firestore'
import { UserSelect } from 'app/domains/User/components/select'
import { ProjectRoleSelect } from 'app/domains/Role/components'
import { Row, Col } from '@qonsoll/react-design'

const ProjectMemberForm = (props) => {
  const { form } = props

  const projectId = Object.values(useParams())[0]

  const [users] = useCollectionData(firestore.collection(USERS))

  const onFinish = (values) => {
    const id = firestore.collection(PROJECT_MEMBER).doc().id

    const user = users?.find((item) => item.id === values.user.id)
    setData(PROJECT_MEMBER, id, {
      id: id,
      userId: user.id,
      firstName: user.firstName,
      surname: user.surname,
      image: user.image,
      projectId: projectId,
      role: values.projectRole.selectedOption
    })
  }

  return (
    <Form form={form} onFinish={onFinish} layout="vertical">
      <Row h="between">
        <Col cw="6" pr={2}>
          <Form.Item
            name="user"
            label="User"
            rules={[{ required: true, message: 'Please, select user.' }]}>
            <UserSelect data={users} />
          </Form.Item>
        </Col>
        <Col cw="6">
          <Form.Item
            name="projectRole"
            label="Role"
            rules={[{ required: true, message: 'Project role is required' }]}>
            <ProjectRoleSelect />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  )
}

export default ProjectMemberForm
