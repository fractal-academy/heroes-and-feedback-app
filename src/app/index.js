import 'antd/dist/antd.css'
import { Row, Col } from '@qonsoll/react-design'
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router
} from 'react-router-dom'
import {
  ROUTES_PATHS,
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE
} from 'app/constants'
import { useUserAuthContext } from 'app/context'

const App = () => {
  const user = useUserAuthContext()

  return (
    <Row noGutters h="center">
      <Col cw={['11', '10', '8', '8', '10', '10']}>
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
      </Col>
    </Row>
  )
}

export default App
