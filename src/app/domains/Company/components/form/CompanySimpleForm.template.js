import { COMPANIES } from 'app/constants/collections'
import { AddressSelect, ImageUploader } from 'app/components'
import { setData } from 'app/services/Firestore'
import { Form, Input, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'
import { Box } from '@qonsoll/react-design'

const CompanySimpleForm = (props) => {
  // INTERFACE
  const { id, data, addressData } = props

  // CUSTOM HOOKS
  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const onFormSubmitFinish = (values) => {
    setData(COMPANIES, id, {
      image: values.image,
      name: values.companyName,
      description: values.companyDescription,
      address: {
        country: values.companyAddress.selectedCountry,
        city: values.companyAddress.selectedCity
      }
    })
  }

  // TEMPLATE
  return (
    <Box marginX={4}>
      <Form
        ref={formRef}
        onFinish={onFormSubmitFinish}
        layout="vertical"
        initialValues={{
          image: data.image,
          companyName: data.name,
          companyDescription: data.description,
          companyAddress: {
            selectedCountry: data.address.country,
            selectedCity: data.address.city
          }
        }}>
        <Form.Item name="image">
          <ImageUploader
            shape="enterprise"
            name={data.name}
            src={data.image}
            itemId={id}
            size={250}
          />
        </Form.Item>
        <Box marginY={2}>
          <Form.Item
            name="companyName"
            label="Company Name"
            placeholder="Enter company name">
            <Input />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Form.Item
            name="companyDescription"
            label="Description"
            placeholder="Description">
            <TextArea />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Form.Item name="companyAddress" label="Address">
            <AddressSelect data={addressData} />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  )
}

export default CompanySimpleForm
