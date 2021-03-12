import { BADGES } from 'app/constants/collections'
import { ImageUploader } from 'app/components'
import { firestore, setData } from 'app/services/Firestore'
import { Form, Input, Button, Checkbox } from 'antd'
import { useState } from 'react'
import { Box } from '@qonsoll/react-design'

const BadgeSimpleForm = (props) => {
  // INTERFACE
  const { id, data } = props

  // STATE
  const [upgradable, setUpgradable] = useState(Boolean(data?.nextLvl))

  // CUSTOM HOOKS
  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const badgeId = id || firestore.collection(BADGES).doc().id

  const onFormSubmitFinish = (values) => {
    setData(BADGES, id, {
      id: badgeId,
      image: values.image || '',
      name: values.badgeName,
      description: values.badgeDescription || '',
      experience: values.badgeExperience || 0
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
          image: data?.image,
          badgeName: data?.name,
          badgeDescription: data?.description,
          badgeExperience: data?.experience,
          badgeNextLvl: data?.nextLvl || 2
        }}>
        <Form.Item name="image">
          <ImageUploader
            shape="badge"
            name={data?.name}
            src={data?.image}
            itemId={id}
            size={100}
          />
        </Form.Item>
        <Box marginY={2}>
          <Form.Item
            name="badgeName"
            label="Badge Name"
            placeholder="Enter badge name"
            rules={[{ required: true, message: 'Badge name is required.' }]}>
            <Input />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Form.Item
            name="badgeDescription"
            label="Description"
            placeholder="Description">
            <Input.TextArea />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Form.Item name="badgeExperience" label="Experience">
            <Input />
          </Form.Item>
        </Box>
        <Box marginY={2}>
          <Form.Item layout="horizontal" label="Upgradable">
            <Checkbox
              onChange={() => setUpgradable(!upgradable)}
              checked={upgradable}
            />
          </Form.Item>
        </Box>

        {upgradable && (
          <Box marginY={2}>
            <Form.Item name="badgeNextLvl" label="Next lvl">
              <Input />
            </Form.Item>
          </Box>
        )}

        <Box marginY={2}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Box>
      </Form>
    </Box>
  )
}
export default BadgeSimpleForm
