import { UserAdvancedView } from 'app/domains/User/components/views'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'

const UserCombinedView = (props) => {
  const { data, id } = props

  return (
    <>
      <UserAdvancedView data={data} id={id} />
      <PersonalBadgeList userId={id} />
    </>
  )
}

export default UserCombinedView
