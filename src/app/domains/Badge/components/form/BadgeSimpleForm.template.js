import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { ImageUploader } from 'app/components'
import { BADGES, PERSONAL_BADGES } from 'app/constants/collections'
import { Box, Row, Col } from '@qonsoll/react-design'
import { firestore, getCollectionRef, setData } from 'app/services/Firestore'
import { BadgeSelect } from 'app/domains/Badge/components/select'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  InputNumber,
  message
} from 'antd'

const BadgeSimpleForm = (props) => {
  // INTERFACE
  const { id, data } = props

  // STATE
  const [upgradable, setUpgradable] = useState(Boolean(data?.nextLvl))

  // CUSTOM HOOKS
  const history = useHistory()
  const [formRef] = Form.useForm()

  const [badges] = useCollectionData(firestore.collection(BADGES))

  // HELPER FUNCTIONS
  const badgeId = id || firestore.collection(BADGES).doc().id

  const onFormSubmitFinish = (values) => {
    console.log(values)
    setData(BADGES, badgeId, {
      id: badgeId,
      image: values.image || '',
      name: values.badgeName,
      description: values.badgeDescription || '',
      experience: values.badgeExperience || 0,
      maxLvl: values.badgeMaxLvl || 1
    }).then(() => {
      getCollectionRef(PERSONAL_BADGES)
        .where('badgeId', '==', badgeId)
        .get()
        .then((res) =>
          res.docs.forEach((item) =>
            setData(PERSONAL_BADGES, item.id, { image: values.image || '' })
          )
        )
        .then(() =>
          message.success(
            (id && 'Badge was edited successfully!') ||
              'Badge was created successfully!'
          )
        )
        .then(history.goBack())
    })
  }

  // TEMPLATE
  return (
    <Row h="center">
      <Col>
        <Form
          form={formRef}
          onFinish={onFormSubmitFinish}
          layout="vertical"
          initialValues={{
            image: data?.image,
            badgeName: data?.name,
            badgeDescription: data?.description,
            badgeExperience: data?.experience || 0,
            badgeNextLvl: data?.nextLvl,
            badgeMaxLvl: data?.maxLvl || 1
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

          <Row h="between" my={2}>
            <Col cw="6">
              <Form.Item
                name="badgeName"
                label="Badge Name"
                placeholder="Enter badge name"
                rules={[
                  { required: true, message: 'Badge name is required.' }
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col cw="auto">
              <Form.Item name="badgeExperience" label="Experience">
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>

          <Row h="right">
            <Col cw="auto" mb={2}>
              <Form.Item name="badgeMaxLvl" label="Max lvl">
                <InputNumber />
              </Form.Item>
            </Col>
          </Row>

          <Box mb={2}>
            <Form.Item
              name="badgeDescription"
              label="Description"
              placeholder="Description">
              <Input.TextArea rows={5} />
            </Form.Item>
          </Box>

          <Row h="between" v="bottom" mb={2}>
            <Col cw="auto">
              <Form.Item layout="horizontal">
                <Typography.Text>Is upgradable </Typography.Text>
                <Checkbox
                  onChange={() => setUpgradable(!upgradable)}
                  checked={upgradable}
                />
              </Form.Item>
            </Col>
          </Row>

          {upgradable && (
            <Row>
              <Col cw="6" mb={2}>
                <Form.Item
                  name="badgeNextLvl"
                  label="Next lvl"
                  rules={[
                    {
                      required: true,
                      message: 'Please select next stage of badge.'
                    }
                  ]}>
                  <BadgeSelect data={badges} />
                </Form.Item>
              </Col>
            </Row>
          )}

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
export default BadgeSimpleForm
