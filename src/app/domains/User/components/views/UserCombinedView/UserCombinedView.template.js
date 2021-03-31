import { Typography } from 'antd'
import { UserAdvancedView } from 'app/domains/User/components/views'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'
import { ItemHotkeyNavigation } from 'app/components'

const UserCombinedView = (props) => {
  const { data, id, currentUser } = props

  return (
    <>
      <UserAdvancedView data={data} id={id} />

      <Typography.Title level={4}>Personal badges:</Typography.Title>

      <PersonalBadgeList userId={id} currentUser={currentUser} />
      <ItemHotkeyNavigation />
    </>
  )
}

export default UserCombinedView
