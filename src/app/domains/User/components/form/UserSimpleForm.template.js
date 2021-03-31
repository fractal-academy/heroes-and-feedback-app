import moment from 'moment'
import { useHistory } from 'react-router-dom'
import { ImageUploader } from 'app/components'
import { USERS } from 'app/constants/collections'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Form, Input, Button, DatePicker, message } from 'antd'
import { firestore, setData, getTimestamp } from 'app/services/Firestore'
import AppRoleSelect from 'app/domains/Role/components/AppRoleSelect.template'
import { useUserAuth } from 'app/context'

const UserSimpleForm = (props) => {
  // INTERFACE
  const { id, data } = props

  const [session, dispatch] = useUserAuth()

  // CUSTOM HOOKS
  const history = useHistory()
  const [formRef] = Form.useForm()

  // COMPUTED PROPERTIES
  const editedBirthday = data?.birthday
    ? moment(data.birthday.toDate().getTime())
    : moment()

  // HELPER FUNCTIONS
  const userId = id || firestore.collection(USERS).doc().id

  const onFinish = (values) => {
    const settedBirthday = getTimestamp().fromDate(
      moment(values.birthday).toDate()
    )
    const userData = {
      id: userId,
      role: values.role.selectedOption || 'User',
      currentExp: data?.currentExp || 0,
      image: values.image || '',
      firstName: values.firstName,
      surname: values.surname,
      email: values.email,
      birthday: settedBirthday
    }
    setData(USERS, userId, userData)
      .then(() => {
        dispatch({
          type: 'SET_DATA',
          data: { ...session, userDBData: userData }
        })
        message.success(
          (id && 'User was edited successfully!') ||
            'User was created successfully!'
        )
      })
      .then(history.goBack())
  }

  // TEMPLATE
  return (
    <Row h="center">
      <Col>
        <Form
          form={formRef}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            image: data?.image,
            role: { selectedOption: data?.role },
            firstName: data?.firstName,
            surname: data?.surname,
            email: data?.email,
            birthday: editedBirthday
          }}>
          <Form.Item name="image">
            <ImageUploader
              shape="user"
              name={data?.firstName}
              src={data?.image}
              collection="users"
              itemId={id}
              size={170}
            />
          </Form.Item>

          <Row display="flex" h="between" my={2}>
            <Col cw="5">
              <Form.Item
                name="firstName"
                label="First Name"
                placeholder="Enter your first name."
                rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col cw="5">
              <Form.Item
                name="surname"
                label="Surname"
                placeholder="Enter your surname."
                rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Box my={2}>
            <Form.Item
              name="email"
              label="E-mail"
              placeholder="Enter your e-mail"
              rules={[
                {
                  required: true,
                  type: 'email'
                }
              ]}>
              <Input />
            </Form.Item>
          </Box>

          <Row display="flex" h="between" my={2}>
            <Col>
              <Form.Item
                name="birthday"
                label="Birthday"
                placeholder="Enter your birthday date"
                rules={[
                  {
                    required: true,
                    type: 'date'
                  }
                ]}>
                <DatePicker size="large" />
              </Form.Item>
            </Col>
            <Col cw="5">
              <Form.Item name="role" label="Role" rules={[{ required: true }]}>
                <AppRoleSelect />
              </Form.Item>
            </Col>
          </Row>

          <Box display="flex" mb={2}>
            <Box mr={1}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Box>
            <Button
              type="primary"
              danger
              onClick={() => {
                history.goBack()
              }}>
              Cancel
            </Button>
          </Box>
        </Form>
      </Col>
    </Row>
  )
}

export default UserSimpleForm
