import { Title } from 'app/components'
import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { USERS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { UserCombinedView } from 'app/domains/User/components/views'

const UserShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(USERS).doc(id))
  const currentUser = useUserAuthContext()

  return (
    <>
      <Title />
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
