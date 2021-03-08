import { COMPANIES } from 'app/constants/collections'
import { AddressSelect, ImageUploader } from 'app/components'
import { setData } from 'app/services/Firestore'
import { Form, Input, Button } from 'antd'
import TextArea from 'antd/lib/input/TextArea'

const CompanySimpleForm = (props) => {
  const { id, data, addressData } = props

  // CUSTOM HOOKS
  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const onFinish = (values) => {
    console.log(values)
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

  return (
    <Form
      ref={formRef}
      onFinish={onFinish}
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
      <Form.Item
        name="companyName"
        label="Company Name"
        placeholder="Enter company name"
        style={{ margin: '8px 24px' }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="companyDescription"
        label="Description"
        placeholder="Description"
        style={{ margin: '8px 24px' }}>
        <TextArea />
      </Form.Item>
      <Form.Item
        name="companyAddress"
        label="Address"
        style={{ margin: '8px 24px' }}>
        <AddressSelect data={addressData} />
      </Form.Item>
      <Button type="primary" htmlType="submit" style={{ margin: '8px 24px' }}>
        Submit
      </Button>
    </Form>
  )
}

export default CompanySimpleForm
