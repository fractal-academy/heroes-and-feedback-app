import { useParams, useHistory } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { PROJECTS, PROJECT_MEMBER } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import {
  useDocumentData,
  useCollectionData
} from 'react-firebase-hooks/firestore'
import { ProjectCombined } from 'app/domains/Project/components/combined'
import { useUserAuthContext } from 'app/context'
import { CaretLeftOutlined, CaretRightOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const ProjectShow = (props) => {
  const { id } = useParams()

  const [projectsData] = useDocumentData(getCollectionRef(PROJECTS).doc(id))

  const [membersData] = useCollectionData(
    getCollectionRef(PROJECT_MEMBER).where('projectId', '==', id)
  )

  const session = useUserAuthContext()

  const history = useHistory()

  const itemIndex = history.location?.state?.itemLinks.findIndex(
    (item) => item === history.location.pathname
  )
  const previousItem = history.location?.state?.itemLinks?.[itemIndex - 1]
  const nextItem = history.location?.state?.itemLinks?.[itemIndex + 1]

  return (
    <>
      <Row noGutters h="center">
        <Col>
          {projectsData && (
            <ProjectCombined
              data={projectsData}
              subdata={membersData}
              currentUserId={session.uid}
            />
          )}
        </Col>
      </Row>
      <Row h="center" v="bottom">
        <Col cw="auto">
          <Button
            disabled={!Boolean(previousItem)}
            shape="circle"
            type="text"
            icon={<CaretLeftOutlined />}
            onClick={() =>
              history.push(previousItem, {
                itemLinks: history.location?.state?.itemLinks
              })
            }
          />
          <Button
            disabled={!Boolean(nextItem)}
            shape="circle"
            type="text"
            icon={<CaretRightOutlined />}
            onClick={() =>
              history.push(nextItem, {
                itemLinks: history.location?.state?.itemLinks
              })
            }
          />
        </Col>
      </Row>
    </>
  )
}

export default ProjectShow
