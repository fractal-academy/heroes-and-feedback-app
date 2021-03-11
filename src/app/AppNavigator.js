import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'

const AppNavigator = () => {
  return (
    <Router>
      <Switch>
        {ROUTES_VALUE.map((route) => {
          if (route.protect) return <Route key={route.path} {...route} />
        })}
        <Redirect to={ROUTES_PATHS.COMPANIES_ALL} />
      </Switch>
    </Router>
  )
}

export default AppNavigator
