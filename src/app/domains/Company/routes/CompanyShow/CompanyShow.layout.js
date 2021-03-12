import { Header } from 'app/components'
import { useParams } from 'react-router-dom'
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
    <>
      <Header />
      {companyData && (
        <CompanyCombined data={companyData} subdata={projectsData} />
      )}
    </>
  )
}

export default CompanyShow
