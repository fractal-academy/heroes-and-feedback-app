import { Button } from 'antd'
import { firestore } from 'app/services'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { PROJECTS } from 'app/constants/collections'
import { ProjectList } from 'app/domains/Project/components/list'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useUserAuthContext } from 'app/context'

const ProjectsAll = (props) => {
  const [data] = useCollectionData(firestore.collection(PROJECTS))

  const session = useUserAuthContext()

  const addButtonRule = session.userDBData.role === 'Superadmin'

  const history = useHistory()
  return (
    <>
      {addButtonRule && (
        <Button
          type="primary"
          onClick={() => {
            history.push(ROUTES_PATHS.PROJECT_CREATE)
          }}>
          + Add
        </Button>
      )}
      {data && <ProjectList data={data} />}
    </>
  )
}

export default ProjectsAll
