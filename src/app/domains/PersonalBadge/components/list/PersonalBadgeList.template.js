import { List } from 'app/components/list'

const badgesMap = [
  {
    id: '0',
    name: 'Fastest review',
    info: '50',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  },
  {
    id: '1',
    name: 'Cleanest mug',
    info: '70',
    image:
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
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
      'https://i.pinimg.com/474x/11/cf/91/11cf91fdfca454624e970f0b96cb8dc4.jpg'
  }
]

const PersonalBadgeList = (props) => {
  return <List type="badges" data={badgesMap} />
}

export default PersonalBadgeList
