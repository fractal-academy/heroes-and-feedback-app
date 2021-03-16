import { Card } from 'app/components'
import { Box } from '@qonsoll/react-design'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'

const UserAdvancedView = (props) => {
  const { data, id } = props

  return (
    <>
      <Card data={data} type="user" userId={id} />
      <Box>
        <PersonalBadgeList userId={id} />
      </Box>
    </>
  )
}

export default UserAdvancedView
