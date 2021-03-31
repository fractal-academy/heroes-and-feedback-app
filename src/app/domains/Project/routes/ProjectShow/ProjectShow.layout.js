import { firestore } from 'app/services'
import { useParams } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { PROJECTS, PROJECT_MEMBER } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import {
  useDocumentData,
  useCollectionData
} from 'react-firebase-hooks/firestore'
import { ProjectCombined } from 'app/domains/Project/components/combined'
import { useUserAuthContext } from 'app/context'

const ProjectShow = (props) => {
  const { id } = useParams()

  const [projectsData] = useDocumentData(getCollectionRef(PROJECTS).doc(id))

  const [membersData] = useCollectionData(
    firestore.collection(PROJECT_MEMBER).where('projectId', '==', id)
  )
  const sortedData =
    membersData &&
    membersData.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    )

  const session = useUserAuthContext()

  return (
    <Row noGutters h="center">
      <Col>
        {projectsData && (
          <ProjectCombined
            data={projectsData}
            subdata={sortedData}
            currentUserId={session.uid}
          />
        )}
      </Col>
    </Row>
  )
}

export default ProjectShow
