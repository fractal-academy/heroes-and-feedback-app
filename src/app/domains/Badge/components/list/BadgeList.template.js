import { List } from 'app/components'

const BadgeList = (props) => {
  const { data } = props

  return <List type="badge" data={data} />
}

export default BadgeList
