import { useUserAuthContext } from 'app/context'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Content, Header, Navbar } from 'app/components'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const MobileLayout = () => {
  const user = useUserAuthContext()

  return (
    <Router>
      <Switch>
        <Box>
          <Row>
            <Col>{user && <Header />}</Col>
          </Row>
          <Row>
            <Col>
              <Content />
            </Col>
          </Row>
          <Row>
            <Col>{user && <Navbar />}</Col>
          </Row>
        </Box>
      </Switch>
    </Router>
  )
}

export default MobileLayout
