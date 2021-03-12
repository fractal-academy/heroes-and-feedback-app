import { firestore } from 'app/services'
import { PROJECTS } from 'app/constants/collections'
import { ProjectList } from 'app/domains/Project/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ProjectAll = (props) => {
  const [data] = useCollectionData(firestore.collection(PROJECTS))

  return <ProjectList data={data} />
}

export default ProjectAll
