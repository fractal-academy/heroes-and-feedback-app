import { List } from 'app/components/list'

const usersMap = [
  {
    id: '0',
    name: 'Alex',
    info: 'alex.test@mail.com',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  },
  {
    id: '1',
    name: 'Mark',
    info: 'mark.test@mail.com',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  },
  {
    id: '2',
    name: 'Tom',
    info: 'tom.test@mail.com',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  },
  {
    id: '3',
    name: 'Leya',
    info: 'leya.test@mail.com'
  }
]

const UserList = (props) => {
  return <List type="user" data={usersMap} />
}

export default UserList
