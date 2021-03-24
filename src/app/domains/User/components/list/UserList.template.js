import { List } from 'app/components'

const UserList = (props) => {
  const { data, userId } = props

  return <List type="user" data={data} currentUserId={userId} />
}

export default UserList
