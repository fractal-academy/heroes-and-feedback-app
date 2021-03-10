import 'antd/dist/antd.css'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'
import 'antd/dist/antd.css'
import { useContext } from 'react'
import { UserContext } from 'app/context/UserContext'
import { ProtectedRoute } from 'app/components'

const App = () => {
  // const { loading } = useAuth()
  // const session = useSession()
  // if (loading) {
  //   return <Spin />
  // }
  const user = useContext(UserContext)
  return (
    <Switch>
      {ROUTES_VALUE.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect
        to={(user && ROUTES_PATHS.COMPANIES_ALL) || ROUTES_PATHS.LOGIN}
      />
    </Switch>
  )
}

export default App
