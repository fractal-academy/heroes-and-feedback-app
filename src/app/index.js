import 'antd/dist/antd.css'
import { useUserAuthContext } from 'app/context'
import 'antd/dist/antd.css'
import AppNavigator from 'app/AppNavigator'
import AuthNavigator from 'app/AuthNavigator'

const App = () => {
  const user = useUserAuthContext()
  return <>{user ? <AppNavigator /> : <AuthNavigator />}</>
}

export default App
