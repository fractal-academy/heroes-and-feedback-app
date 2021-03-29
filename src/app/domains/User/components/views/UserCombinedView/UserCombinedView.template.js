import { Typography } from 'antd'
import { Box } from '@qonsoll/react-design'
import { UserAdvancedView } from 'app/domains/User/components/views'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'

const UserCombinedView = (props) => {
  const { data, id } = props

  return (
    <>
      <UserAdvancedView data={data} id={id} />

      <Typography.Title level={4}>Personal badges:</Typography.Title>

      <PersonalBadgeList userId={id} />
    </>
  )
}

export default UserCombinedView
