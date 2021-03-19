import { useUserAuthContext } from 'app/context'
import { List } from 'app/components'

const UserList = (props) => {
  const { data } = props
  const session = useUserAuthContext()

  return <List type="user" data={data} currentUserId={session.uid} />
}

export default UserList
