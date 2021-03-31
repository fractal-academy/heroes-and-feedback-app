import 'antd/dist/antd.css'
import useMedia from 'use-media'
import { DesktopLayout, MobileLayout } from 'app/components'
import { Container, Row, Col } from '@qonsoll/react-design'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  const isWide = useMedia({ minWidth: '768px' })

  return (
    <Container height="inherit">
      <Row noGutters h="center" height="inherit">
        <Col cw={['11', '11', '11', '11', '11', '11']} height="inherit">
          <Router>
            <Switch>{isWide ? <DesktopLayout /> : <MobileLayout />}</Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  )
}

export default App
