import { List } from 'app/components'

const BadgeList = (props) => {
  const { data } = props

  const message = 'Enter badge name...'

  return <List type="badge" data={data} message={message} />
}

export default BadgeList
