import { useUserAuthContext } from 'app/context'
import { List } from 'app/components'

const UserList = (props) => {
  const { data } = props
  const session = useUserAuthContext()

  const message = 'Enter user name...'

  return (
    <List
      type="user"
      data={data}
      message={message}
      currentUserId={session.uid}
    />
  )
}

export default UserList
