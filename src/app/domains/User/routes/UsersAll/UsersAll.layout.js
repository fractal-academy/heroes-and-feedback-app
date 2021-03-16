import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { USERS } from 'app/constants/collections'
import { UserList } from 'app/domains/User/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const UsersAll = (props) => {
  const [data] = useCollectionData(firestore.collection(USERS))

  const history = useHistory()

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.push(ROUTES_PATHS.USER_CREATE)
        }}>
        + Add
      </Button>
      <UserList data={data} />
    </>
  )
}

export default UsersAll
