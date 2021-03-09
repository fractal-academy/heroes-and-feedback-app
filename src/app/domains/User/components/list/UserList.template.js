import { List } from 'app/components'

const usersMap = [
  {
    id: '0',
    name: 'Alex',
    info: 'alex.test@mail.com',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
  },
  {
    id: '1',
    name: 'Mark',
    info: 'mark.test@mail.com',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
  },
  {
    id: '2',
    name: 'Tom',
    info: 'tom.test@mail.com',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
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
