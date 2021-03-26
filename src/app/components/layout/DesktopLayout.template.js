import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { Content, Sidebar } from 'app/components'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const DesktopLayout = (props) => {
  const user = useUserAuthContext()

  return (
    <Router>
      <Switch>
        <Row>
          <Col cw="auto">{user && <Sidebar />}</Col>
          <Col>
            <Content />
          </Col>
        </Row>
      </Switch>
    </Router>
  )
}

export default DesktopLayout
