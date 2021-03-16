import { CustomSelect } from 'app/components'
import { APP_ROLES } from 'app/constants'

const AppRoleSelect = () => {
  return <CustomSelect data={Object.values(APP_ROLES)} />
}

export default AppRoleSelect
