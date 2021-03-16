import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { USERS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { UserAdvancedView } from 'app/domains/User/components/views'

const UserShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(USERS).doc(id))

  return (
    <Row noGutters h="center">
      <Col cw="9">{data && <UserAdvancedView data={data} id={id} />} </Col>
    </Row>
  )
}

export default UserShow
