import 'antd/dist/antd.css'
import { useUserAuthContext } from 'app/context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import 'antd/dist/antd.css'
import {
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE,
  ROUTES_PATHS
} from 'app/constants'

const App = () => {
  const user = useUserAuthContext()
  return (
    <Router>
      <Switch>
        {user ? (
          <>
            {PROTECTED_ROUTES_VALUE.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Redirect to={ROUTES_PATHS.COMPANIES_ALL} />
          </>
        ) : (
          <>
            {PUBLIC_ROUTES_VALUE.map((route) => (
              <Route key={route.path} {...route} />
            ))}
            <Redirect to={ROUTES_PATHS.LOGIN} />
          </>
        )}
      </Switch>
    </Router>
  )
}

export default App
