import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { COMPANIES } from 'app/constants/collections'
import { CompanyList } from 'app/domains/Company/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Row, Col, Box } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'

const CompaniesAll = (props) => {
  const [data] = useCollectionData(firestore.collection(COMPANIES))

  const session = useUserAuthContext()

  const addButtonRule = session.userDBData.role === 'Superadmin'

  const history = useHistory()

  return (
    <Row>
      <Col>
        {addButtonRule && (
          <Box>
            <Button
              type="primary"
              onClick={() => {
                history.push(ROUTES_PATHS.COMPANY_CREATE)
              }}>
              + Add
            </Button>
          </Box>
        )}
        <CompanyList data={data} />
      </Col>
    </Row>
  )
}

export default CompaniesAll
