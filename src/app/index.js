import 'antd/dist/antd.css'
import { Layout } from 'antd'
import { useEffect, useState } from 'react'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE,
  ROUTES_PATHS
} from 'app/constants'

import { Navigation } from 'app/components'

const App = () => {
  const user = useUserAuthContext()

  const changeAvailableRoutes = (user) =>
    user ? PROTECTED_ROUTES_VALUE : PUBLIC_ROUTES_VALUE

  const [currentRoutes, setCurrentRoutes] = useState(
    changeAvailableRoutes(user)
  )

  useEffect(() => {
    setCurrentRoutes(changeAvailableRoutes(user))
  }, [user])

  return (
    <Row noGutters h="center" pt={4}>
      <Col cw={['12', '11', '11', '11', '11', '11']}>
        <Router>
          <Switch>
            <Layout style={{ background: '#fff' }}>
              {user && <Navigation />}
              <Layout.Content>
                {currentRoutes.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
                <Route
                  exact
                  path="/"
                  render={() => {
                    return (
                      <Redirect
                        to={
                          user ? ROUTES_PATHS.COMPANIES_ALL : ROUTES_PATHS.LOGIN
                        }
                      />
                    )
                  }}
                />
              </Layout.Content>
            </Layout>
          </Switch>
        </Router>
      </Col>
    </Row>
  )
}

export default App
