import { Button } from 'antd'
import { Title } from 'app/components'
import { firestore } from 'app/services'
import { Box } from '@qonsoll/react-design'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { BADGES } from 'app/constants/collections'
import { BadgeList } from 'app/domains/Badge/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useUserAuthContext } from 'app/context'

const BadgesAll = (props) => {
  const [data] = useCollectionData(firestore.collection(BADGES).orderBy('name'))

  const session = useUserAuthContext()

  const titleText = 'Badges'
  const addButtonRule = session.userDBData.role === 'Superadmin'

  const history = useHistory()
  return (
    <>
      <Title withName titleText={titleText} />
      {addButtonRule && (
        <Box textAlign="right" mt={2}>
          <Button
            type="primary"
            onClick={() => {
              history.push(ROUTES_PATHS.BADGE_CREATE)
            }}>
            + Add
          </Button>
        </Box>
      )}
      {data && <BadgeList data={data} />}
    </>
  )
}

export default BadgesAll
