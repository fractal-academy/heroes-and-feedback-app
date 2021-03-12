import { Row, Col, Box } from '@qonsoll/react-design'
import { ProjectList } from 'app/domains/Project/components/list'
import { CompanyAdvancedView } from 'app/domains/Company/components/views'

const CompanyCombined = (props) => {
  const { data, subdata } = props

  return (
    <Row>
      <Col>
        <CompanyAdvancedView data={data} />

        {subdata?.length > 0 ? (
          <ProjectList data={subdata} />
        ) : (
          <Box mt={5}>
            <img
              src="/assets/empty.svg"
              alt=""
              style={{ width: '100%', height: '300px' }}
            />
          </Box>
        )}
      </Col>
    </Row>
  )
}

export default CompanyCombined
