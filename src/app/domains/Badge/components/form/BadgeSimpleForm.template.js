import { BADGES } from 'app/constants/collections'
import { ImageUploader } from 'app/components'
import { setData } from 'app/services/Firestore'
import { Form, Input, Button, Checkbox } from 'antd'
import { useState } from 'react'

const BadgeSimpleForm = (props) => {
  const { id, data } = props

  const [upgradable, setUpgradable] = useState(Boolean(data.nextLvl))

  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const onFinish = (values) => {
    setData(BADGES, id, {
      image: values.image,
      name: values.badgeName,
      description: values.badgeDescription,
      experience: values.badgeExperience
    })
  }

  return (
    <Form
      ref={formRef}
      onFinish={onFinish}
      layout="vertical"
      initialValues={{
        image: data.image,
        badgeName: data.name,
        badgeDescription: data.description,
        badgeExperience: data.experience,
        badgeNextLvl: data.nextLvl || 2
      }}>
      <Form.Item name="image">
        <ImageUploader
          shape="badge"
          name={data.name}
          src={data.image}
          itemId={id}
          size={250}
        />
      </Form.Item>
      <Form.Item
        name="badgeName"
        label="Badge Name"
        placeholder="Enter badge name"
        style={{ margin: '8px 24px' }}>
        <Input />
      </Form.Item>
      <Form.Item
        name="badgeDescription"
        label="Description"
        placeholder="Description"
        style={{ margin: '8px 24px' }}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item
        name="badgeExperience"
        label="Experience"
        style={{ margin: '8px 24px' }}>
        <Input />
      </Form.Item>
      <Form.Item
        layout="horizontal"
        label="Upgradable"
        style={{ margin: '8px 24px' }}>
        <Checkbox
          onChange={() => setUpgradable(!upgradable)}
          checked={upgradable}
        />
      </Form.Item>
      {upgradable && (
        <Form.Item
          name="badgeNextLvl"
          label="Next lvl"
          style={{ margin: '8px 24px' }}>
          <Input />
        </Form.Item>
      )}
      <Button type="primary" htmlType="submit" style={{ margin: '8px 24px' }}>
        Submit
      </Button>
    </Form>
  )
}
export default BadgeSimpleForm
