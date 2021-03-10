import { Card } from 'app/components'
import { useParams } from 'react-router-dom'
import { USERS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const UserAdvancedView = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(USERS).doc(id))

  return <>{data && <Card data={data} type="user" />}</>
}

export default UserAdvancedView
