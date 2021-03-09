import 'antd/dist/antd.css'
import { Row, Col } from '@qonsoll/react-design'
import { Switch, Route, Redirect } from 'react-router-dom'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'

const App = () => {
  return (
    <Row noGutters h="center">
      <Col cw={['10', '10', '8', '8', '10', '10']}>
        <Switch>
          {ROUTES_VALUE.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to={ROUTES_PATHS.LOGIN} />
        </Switch>
      </Col>
    </Row>
  )
}

export default App
