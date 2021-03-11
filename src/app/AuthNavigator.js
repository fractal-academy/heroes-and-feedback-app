import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'

const AuthNavigator = () => {
  return (
    <Router>
      <Switch>
        {ROUTES_VALUE.map((route) => {
          if (!route.protect) {
            return <Route key={route.path} {...route} />
          }
        })}
        <Redirect to={ROUTES_PATHS.LOGIN} />
      </Switch>
    </Router>
  )
}

export default AuthNavigator
