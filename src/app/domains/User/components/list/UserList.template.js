import { List } from 'app/components'

const UserList = (props) => {
  const { data } = props

  return <List type="user" data={data} />
}

export default UserList
