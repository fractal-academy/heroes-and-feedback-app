import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { getCollectionRef } from 'app/services/Firestore'
import { COMPANIES, PROJECTS } from 'app/constants/collections'
import {
  useDocumentData,
  useCollectionData
} from 'react-firebase-hooks/firestore'
import { CompanyCombined } from 'app/domains/Company/components/combined'

const CompanyShow = (props) => {
  const { id } = useParams()

  const [companyData] = useDocumentData(getCollectionRef(COMPANIES).doc(id))

  const [projectsData] = useCollectionData(
    getCollectionRef(PROJECTS).where('companyId', '==', id)
  )

  return (
    <Row noGutters h="center">
      <Col>
        {companyData && (
          <CompanyCombined data={companyData} subdata={projectsData} />
        )}
      </Col>
    </Row>
  )
}

export default CompanyShow
