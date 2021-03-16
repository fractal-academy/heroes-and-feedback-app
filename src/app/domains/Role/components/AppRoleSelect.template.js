import { CustomSelect } from 'app/components'
import { APP_ROLES } from 'app/constants'

const AppRoleSelect = (props) => {
  const { onChange, value = {} } = props

  return (
    <CustomSelect
      data={Object.values(APP_ROLES)}
      onChange={onChange}
      value={value}
    />
  )
}

export default AppRoleSelect
