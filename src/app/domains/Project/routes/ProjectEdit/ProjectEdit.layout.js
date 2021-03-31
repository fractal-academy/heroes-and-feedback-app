import { Title } from 'app/components'
import { firestore } from 'app/services'
import { useParams } from 'react-router-dom'
import { PROJECTS } from 'app/constants/collections'
import { useDocumentData } from 'react-firebase-hooks/firestore'
import { ProjectSimpleForm } from 'app/domains/Project/components/form'

const ProjectEdit = (props) => {
  const { id } = useParams()

  const [data] = useDocumentData(firestore.collection(PROJECTS).doc(id))

  const titleText = 'Edit project'

  return (
    <>
      <Title withName titleText={titleText} />
      {data && <ProjectSimpleForm id={id} data={data} />}
    </>
  )
}

export default ProjectEdit
