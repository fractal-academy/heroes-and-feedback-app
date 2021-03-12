import { Card } from 'app/components'

const BadgeAdvancedView = (props) => {
  const { data } = props

  return <Card type="badge" data={data} />
}

export default BadgeAdvancedView
