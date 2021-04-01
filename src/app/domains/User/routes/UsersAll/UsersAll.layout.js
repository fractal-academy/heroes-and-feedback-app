import { Title } from 'app/components'
import { firestore } from 'app/services'
import { USERS, PERSONAL_BADGES } from 'app/constants/collections'
import { UserList } from 'app/domains/User/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const UsersAll = (props) => {
  const [userData] = useCollectionData(
    firestore.collection(USERS).orderBy('firstName')
  )
  const [badgesData] = useCollectionData(firestore.collection(PERSONAL_BADGES))

  const titleText = 'Users'

  return (
    <>
      <Title withName titleText={titleText} />
      <UserList data={userData} subdata={badgesData} />
    </>
  )
}

export default UsersAll
