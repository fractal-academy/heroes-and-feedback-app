import { Typography, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import { ROUTES_PATHS } from 'app/constants'
import { Row, Col, Box } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { ProjectList } from 'app/domains/Project/components/list'
import { CompanyAdvancedView } from 'app/domains/Company/components/views'

const CompanyCombined = (props) => {
  const { data, subdata } = props

  const history = useHistory()
  const session = useUserAuthContext()

  const accessRules = session.userDBData.role === 'Superadmin'

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
              There's no projects made by this company.
            </Typography.Text>
          </Box>
        )}
        {accessRules && (
          <Box textAlign="center" mt={4}>
            <Button
              type="primary"
              onClick={() => history.push(ROUTES_PATHS.PROJECT_CREATE)}>
              Add project
            </Button>
          </Box>
        )}
      </Col>
    </Row>
  )
}

export default CompanyCombined
