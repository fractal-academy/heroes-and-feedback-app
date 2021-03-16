import { Card } from 'app/components'

const UserAdvancedView = (props) => {
  const { data } = props

  return <Card data={data} type="user" />
}

export default UserAdvancedView
