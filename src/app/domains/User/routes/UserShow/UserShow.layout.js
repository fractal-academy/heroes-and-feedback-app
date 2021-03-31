import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { USERS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { UserCombinedView } from 'app/domains/User/components/views'
import { useUserAuthContext } from 'app/context'

const UserShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(USERS).doc(id))
  const currentUser = useUserAuthContext()

  return (
    <>
      <Row noGutters h="center">
        <Col>
          {data && (
            <UserCombinedView
              data={data}
              id={id}
              currentUser={currentUser.uid}
            />
          )}
        </Col>
      </Row>
    </>
  )
}

export default UserShow
