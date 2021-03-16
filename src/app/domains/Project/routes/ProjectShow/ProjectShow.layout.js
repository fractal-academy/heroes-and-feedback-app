import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { PROJECTS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProjectAdvancedView } from 'app/domains/Project/components/views'

const ProjectShow = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(PROJECTS).doc(id))

  return (
    <Row noGutters h="center">
      <Col cw="9">{data && <ProjectAdvancedView data={data} />}</Col>
    </Row>
  )
}

export default ProjectShow
