import { Card } from 'app/components'
import { useParams } from 'react-router-dom'
import { BADGES } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const BadgeAdvancedView = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(BADGES).doc(id))

  return <>{data && <Card type="badge" data={data} />}</>
}

export default BadgeAdvancedView
