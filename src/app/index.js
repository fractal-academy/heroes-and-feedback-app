import 'antd/dist/antd.css'
import { useEffect, useState } from 'react'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PUBLIC_ROUTES_VALUE, PROTECTED_ROUTES_VALUE } from 'app/constants'

const App = () => {
  const user = useUserAuthContext()

  const changeAvailableRoutes = (user) =>
    user ? PROTECTED_ROUTES_VALUE : PUBLIC_ROUTES_VALUE

  const [currentRoutes, setCurrentRoutes] = useState(changeAvailableRoutes())

  useEffect(() => {
    setCurrentRoutes(changeAvailableRoutes(user))
  }, [user])

  return (
    <Row noGutters h="center">
      <Col cw={['11', '10', '8', '8', '10', '10']}>
        <Router>
          <Switch>
            {currentRoutes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Router>
      </Col>
    </Row>
  )
}

export default App
