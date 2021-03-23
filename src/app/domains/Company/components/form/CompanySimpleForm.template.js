import { Form, Input, Button, message } from 'antd'
import { useHistory } from 'react-router-dom'
import TextArea from 'antd/lib/input/TextArea'
import { COMPANIES } from 'app/constants/collections'
import { Box, Row, Col } from '@qonsoll/react-design'
import { firestore, setData } from 'app/services/Firestore'
import { AddressSelect, ImageUploader } from 'app/components'

const CompanySimpleForm = (props) => {
  // INTERFACE
  const { id, data, addressData } = props

  // CUSTOM HOOKS
  const history = useHistory()
  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const companyId = id || firestore.collection(COMPANIES).doc().id

  const onFormSubmitFinish = (values) => {
    setData(COMPANIES, companyId, {
      id: companyId,
      image: values.image || '',
      name: values.companyName,
      description: values.companyDescription || '',
      address: {
        country: values.companyAddress?.selectedCountry,
        city: values.companyAddress?.selectedCity
      }
    })
      .then(() =>
        message.success(
          (id && 'Company was edited successfully!') ||
            'Company was created successfully!'
        )
      )
      .then(history.goBack())
  }

  // TEMPLATE
  return (
    <Row h="center">
      <Col cw="8">
        <Form
          form={formRef}
          onFinish={onFormSubmitFinish}
          layout="vertical"
          initialValues={{
            image: data?.image,
            companyName: data?.name,
            companyDescription: data?.description,
            companyAddress: {
              selectedCountry: data?.address?.country,
              selectedCity: data?.address?.city
            }
          }}>
          <Form.Item name="image">
            <ImageUploader
              shape="enterprise"
              name={data?.name}
              src={data?.image}
              itemId={id}
              size={170}
            />
          </Form.Item>

          <Box my={2}>
            <Form.Item
              name="companyName"
              label="Company Name"
              placeholder="Enter company name"
              rules={[
                { required: true, message: 'Company name is required.' }
              ]}>
              <Input />
            </Form.Item>
          </Box>

          <Box my={2}>
            <Form.Item
              name="companyDescription"
              label="Description"
              placeholder="Description">
              <TextArea rows={5} />
            </Form.Item>
          </Box>

          <Box my={2}>
            <Form.Item name="companyAddress" label="Address">
              <AddressSelect data={addressData} />
            </Form.Item>
          </Box>

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

export default CompanySimpleForm
