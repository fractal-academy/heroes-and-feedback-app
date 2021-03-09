import { Card } from 'app/components'

const data = {
  id: 0,
  firstName: 'Tom',
  secondName: 'Holland',
  role: 'Project manager',
  birth: '01.06.1996',
  mail: 'tom.holland@mail.com',
  currentExp: 1200,
  image:
    'https://cdn.dribbble.com/users/5746/screenshots/3676209/dribbble-spiderman-salvatier.jpg'
}

const UserAdvancedView = (props) => {
  return <Card type="user" data={data} />
}

export default UserAdvancedView
