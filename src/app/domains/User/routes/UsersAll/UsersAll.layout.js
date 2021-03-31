import { Title } from 'app/components'
import { firestore } from 'app/services'
import { USERS } from 'app/constants/collections'
import { UserList } from 'app/domains/User/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const UsersAll = (props) => {
  const [data] = useCollectionData(
    firestore.collection(USERS).orderBy('firstName')
  )

  const titleText = 'Users'

  return (
    <>
      <Title withName titleText={titleText} />
      <UserList data={data} />
    </>
  )
}

export default UsersAll
