import { Card, ItemHotkeyNavigation } from 'app/components'

const BadgeAdvancedView = (props) => {
  const { data } = props

  return (
    <>
      <Card type="badge" data={data} />
      <ItemHotkeyNavigation />
    </>
  )
}

export default BadgeAdvancedView
