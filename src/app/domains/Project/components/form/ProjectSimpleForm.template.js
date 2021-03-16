import { Form, Input, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import TextArea from 'antd/lib/input/TextArea'
import { ImageUploader } from 'app/components'
import { Box, Row, Col } from '@qonsoll/react-design'
import { firestore, setData } from 'app/services/Firestore'
import { PROJECTS, COMPANIES } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { CompanySelect } from 'app/domains/Company/components/select'

const ProjectSimpleForm = (props) => {
  // INTERFACE
  const { id, data } = props

  const [companies] = useCollectionData(firestore.collection(COMPANIES))

  // CUSTOM HOOKS
  const history = useHistory()
  const [formRef] = Form.useForm()

  // HELPER FUNCTIONS
  const projectId = id || firestore.collection(PROJECTS).doc().id

  const onFormSubmitFinish = (values) => {
    setData(PROJECTS, projectId, {
      id: projectId,
      image: values.image || '',
      name: values.projectName,
      description: values.projectDescription || '',
      companyId: ''
    }).then(history.goBack())
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
            projectName: data?.name,
            projectDescription: data?.description
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
              name="projectName"
              label="Project Name"
              placeholder="Enter company name"
              rules={[
                { required: true, message: 'Project name is required.' }
              ]}>
              <Input />
            </Form.Item>
          </Box>

          <Box my={2}>
            <Form.Item
              name="companyId"
              label="Company"
              placeholder="Description">
              <CompanySelect data={companies} />
            </Form.Item>
          </Box>

          <Box my={2}>
            <Form.Item
              name="projectDescription"
              label="Description"
              placeholder="Description">
              <TextArea rows={5} />
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

export default ProjectSimpleForm
