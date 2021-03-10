import { Card } from 'app/components'
import { useParams } from 'react-router-dom'
import { PROJECTS } from 'app/constants/collections'
import { getCollectionRef } from 'app/services/Firestore'
import { useDocumentData } from 'react-firebase-hooks/firestore'

const ProjectAdvancedView = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(getCollectionRef(PROJECTS).doc(id))

  return <>{data && <Card type="project" data={data} />}</>
}

export default ProjectAdvancedView
