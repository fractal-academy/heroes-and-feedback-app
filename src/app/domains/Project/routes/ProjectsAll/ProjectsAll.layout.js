import { Header } from 'app/components'
import { firestore } from 'app/services'
import { PROJECTS } from 'app/constants/collections'
import { ProjectList } from 'app/domains/Project/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ProjectsAll = (props) => {
  const [data] = useCollectionData(firestore.collection(PROJECTS))

  return (
    <>
      <Header />
      <ProjectList data={data} />
    </>
  )
}

export default ProjectsAll
