import { Title } from 'app/components'
import { useParams } from 'react-router-dom'
import { firestore } from 'app/services/index'
import { USERS } from 'app/constants/collections'
import { UserSimpleForm } from 'app/domains/User/components/form'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const UserEdit = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(firestore.collection(USERS).doc(id))

  const titleText = 'Edit user'

  return (
    <>
      <Title withName titleText={titleText} />
      {data && <UserSimpleForm id={id} data={data} />}
    </>
  )
}

export default UserEdit
