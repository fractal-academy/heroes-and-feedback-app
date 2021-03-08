import { Form, Input, Button, DatePicker } from 'antd'
import { Row, Col } from '@qonsoll/react-design'
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

  return (
    <Row>
      <Col>
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
          <Form.Item
            name="firstName"
            label="First Name"
            placeholder="Enter your first name"
            rules={[
              {
                required: true
              }
            ]}
            style={{ margin: '8px 24px' }}>
            <Input />
          </Form.Item>
          <Form.Item
            name="surname"
            label="Surname"
            placeholder="Enter your surname"
            rules={[
              {
                required: true
              }
            ]}
            style={{ margin: '8px 24px' }}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="E-mail"
            placeholder="Enter your e-mail"
            rules={[
              {
                required: true,
                type: 'email'
              }
            ]}
            style={{ margin: '8px 24px' }}>
            <Input />
          </Form.Item>
          <Form.Item
            name="birthday"
            label="Birthday"
            placeholder="Enter your birthday date"
            rules={[
              {
                required: true,
                type: 'date'
              }
            ]}
            style={{ margin: '8px 24px' }}>
            <DatePicker size="large" />
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            style={{ margin: '8px 24px' }}>
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  )
}

export default UserSimpleForm
