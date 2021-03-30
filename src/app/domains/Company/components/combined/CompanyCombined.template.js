import { Typography, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ProjectList } from 'app/domains/Project/components/list'
import { CompanyAdvancedView } from 'app/domains/Company/components/views'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
const CompanyCombined = (props) => {
  const { data, subdata, companyId } = props

  const history = useHistory()

  const itemIndex = history.location?.state?.itemLinks.findIndex(
    (item) => item === history.location.pathname
  )
  const previousItem = history.location?.state?.itemLinks?.[itemIndex - 1]
  const nextItem = history.location?.state?.itemLinks?.[itemIndex + 1]

  return (
    <Row>
      <Col>
        <CompanyAdvancedView data={data} />
        <Typography.Title level={4}>Company projects:</Typography.Title>
        {subdata?.length > 0 ? (
          <ProjectList data={subdata} />
        ) : (
          <Box textAlign="center" mt={4}>
            <Typography.Text type="secondary">
              No one works with this project.
            </Typography.Text>
          </Box>
        )}
        <Box textAlign="center" mt={4}>
          <Button
            type="primary"
            onClick={() =>
              history.push(ROUTES_PATHS.PROJECT_CREATE, {
                id: companyId,
                name: data.name
              })
            }>
            Add project
          </Button>
        </Box>
        <Row h="center">
          <Col cw="auto">
            <Button
              disabled={!Boolean(previousItem)}
              shape="circle"
              type="text"
              icon={<CaretLeftOutlined />}
              onClick={() =>
                history.push(previousItem, {
                  itemLinks: history.location?.state?.itemLinks
                })
              }
            />
            <Button
              disabled={!Boolean(nextItem)}
              shape="circle"
              type="text"
              icon={<CaretRightOutlined />}
              onClick={() =>
                history.push(nextItem, {
                  itemLinks: history.location?.state?.itemLinks
                })
              }
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default CompanyCombined
