import { useUserAuthContext } from 'app/context'
import { CustomSelect } from 'app/components'
import { APP_ROLES } from 'app/constants'

const AppRoleSelect = (props) => {
  const { onChange, value } = props

  const session = useUserAuthContext()

  return (
    <CustomSelect
      disabled={session.userDBData.role === 'User'}
      data={Object.values(APP_ROLES)}
      onChange={onChange}
      value={value}
    />
  )
}

export default AppRoleSelect
