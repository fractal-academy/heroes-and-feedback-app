import { Form, Input, Button, DatePicker } from 'antd'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ImageUploader } from 'app/components'
import { setData, getTimestamp } from 'app/services/Firestore'
import moment from 'moment'
import { USERS } from 'app/constants/collections'

const UserSimpleForm = (props) => {
  // INTERFACE
  const { id, data } = props

  // CUSTOM HOOKS
  const [formRef] = Form.useForm()

  // COMPUTED PROPERTIES
  const editedBirthday = moment(data.birthday.toDate().getTime())

  // HELPER FUNCTIONS
  const onFinish = (values) => {
    const settedBirthday = getTimestamp().fromDate(
      moment(values.birthday).toDate()
    )
    setData(USERS, id, {
      image: values.image,
      firstName: values.firstName,
      surname: values.surname,
      email: values.email,
      birthday: settedBirthday
    })
  }

  // TEMPLATE
  return (
    <Row>
      <Col marginX={4}>
        <Form
          ref={formRef}
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            image: data.image,
            firstName: data.firstName,
            surname: data.surname,
            email: data.email,
            birthday: editedBirthday
          }}>
          <Form.Item name="image">
            <ImageUploader
              shape="user"
              name={data.firstName}
              src={data.image}
              collection="users"
              itemId={id}
              size={250}
            />
          </Form.Item>
          <Box marginY={2}>
            <Form.Item
              name="firstName"
              label="First Name"
              placeholder="Enter your first name"
              rules={[
                {
                  required: true
                }
              ]}>
              <Input />
            </Form.Item>
          </Box>
          <Box marginY={2}>
            <Form.Item
              name="surname"
              label="Surname"
              placeholder="Enter your surname"
              rules={[
                {
                  required: true
                }
              ]}>
              <Input />
            </Form.Item>
          </Box>
          <Box marginY={2}>
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
          <Box marginY={2}>
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
          </Box>
          <Box marginY={2}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Box>
        </Form>
      </Col>
    </Row>
  )
}

export default UserSimpleForm
