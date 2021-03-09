import { List } from 'app/components'

const badgesMap = [
  {
    id: '0',
    name: 'Fastest review',
    info: '50',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/6763891/dribbble-motu-sorceress.jpg'
  },
  {
    id: '1',
    name: 'Cleanest mug',
    info: '70',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/6763891/dribbble-motu-sorceress.jpg'
  },
  {
    id: '2',
    name: 'Perfect code!',
    info: '30'
  },
  {
    id: '3',
    name: 'Hands from ass',
    info: '100',
    image:
      'https://cdn.dribbble.com/users/5746/screenshots/6763891/dribbble-motu-sorceress.jpg'
  }
]

const BadgeList = (props) => {
  return <List type="badge" data={badgesMap} />
}

export default BadgeList
