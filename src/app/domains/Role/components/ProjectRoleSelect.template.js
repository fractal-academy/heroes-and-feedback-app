import { CustomSelect } from 'app/components'
import { PROJECT_ROLES } from 'app/constants'

const ProjectRoleSelect = (props) => {
  return <CustomSelect data={Object.values(PROJECT_ROLES)} {...props} />
}

export default ProjectRoleSelect
