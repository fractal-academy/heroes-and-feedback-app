import { CustomSelect } from 'app/components'
import { PROJECT_ROLES } from 'app/constants'

const ProjectRoleSelect = () => {
  return <CustomSelect data={Object.values(PROJECT_ROLES)} />
}

export default ProjectRoleSelect
