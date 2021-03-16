import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { PROJECTS } from 'app/constants/collections'
import { ProjectList } from 'app/domains/Project/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'

const ProjectsAll = (props) => {
  const [data] = useCollectionData(firestore.collection(PROJECTS))

  const history = useHistory()
  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          history.push(ROUTES_PATHS.PROJECT_CREATE)
        }}>
        + Add
      </Button>
      <ProjectList data={data} />
    </>
  )
}

export default ProjectsAll
