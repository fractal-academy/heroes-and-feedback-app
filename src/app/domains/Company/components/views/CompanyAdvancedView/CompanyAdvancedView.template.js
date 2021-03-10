import { Card } from 'app/components'
import { useParams } from 'react-router-dom'
import { COMPANIES } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const CompanyAdvancedView = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(COMPANIES).doc(id))

  return <>{data && <Card type="company" data={data} />}</>
}

export default CompanyAdvancedView
