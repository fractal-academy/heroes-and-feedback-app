import { List } from 'app/components'
import { firestore } from 'app/services'
import { PROJECTS } from 'app/constants/collections'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ProjectList = (props) => {
  const [data] = useCollectionData(firestore.collection(PROJECTS))

  return <List type="project" data={data} />
}

export default ProjectList
