import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { BADGES } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { BadgeAdvancedView } from 'app/domains/Badge/components/views'

const BadgeShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(BADGES).doc(id))

  return (
    <Row noGutters h="center">
      <Col>{data && <BadgeAdvancedView data={data} />}</Col>
    </Row>
  )
}

export default BadgeShow
