import { List } from 'app/components'
import { firestore } from 'app/services'
import { USERS } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const UserList = (props) => {
  const [data] = useCollectionData(firestore.collection(USERS))

  return <List type="user" data={data} />
}

export default UserList
