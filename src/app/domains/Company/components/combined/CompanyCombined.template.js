import { Typography, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { Row, Col, Box } from '@qonsoll/react-design'
import { ProjectList } from 'app/domains/Project/components/list'
import { CompanyAdvancedView } from 'app/domains/Company/components/views'
import { ItemHotkeyNavigation } from 'app/components'
const CompanyCombined = (props) => {
  const { data, subdata, companyId } = props

  const history = useHistory()

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
        <ItemHotkeyNavigation />
      </Col>
    </Row>
  )
}

export default CompanyCombined
