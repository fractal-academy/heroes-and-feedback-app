import { Card } from 'app/components'
import { useParams } from 'react-router-dom'
import { USERS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { Box } from '@qonsoll/react-design'
import { PersonalBadgeList } from 'app/domains/PersonalBadge/components/list'

const UserAdvancedView = (props) => {
  const { data, id } = props

  return (
    <>
      <Card data={data} type="user" />
      <Box>
        <PersonalBadgeList userId={id} />
      </Box>
    </>
  )
}

export default UserAdvancedView
