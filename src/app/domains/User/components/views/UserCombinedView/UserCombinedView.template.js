import { Typography } from 'antd'
import { Box } from '@qonsoll/react-design'
import { ItemHotkeyNavigation } from 'app/components'
import { UserAdvancedView } from 'app/domains/User/components/views'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'

const UserCombinedView = (props) => {
  const { data, id, currentUser } = props

  return (
    <>
      <Box mb={4}>
        <UserAdvancedView data={data} id={id} />
      </Box>

      <Typography.Title level={4}>Personal badges:</Typography.Title>

      <PersonalBadgeList userId={id} currentUser={currentUser} />
      <ItemHotkeyNavigation />
    </>
  )
}

export default UserCombinedView
