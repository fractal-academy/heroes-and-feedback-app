import 'antd/dist/antd.css'
import useMedia from 'use-media'
import { DesktopLayout, MobileLayout } from 'app/components'
import { Container, Row, Col, Box } from '@qonsoll/react-design'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  const isWide = useMedia({ minWidth: '768px' })

  return (
    <Container>
      <Row noGutters h="center" pt={4}>
        <Col cw={['11', '11', '11', '11', '11', '11']}>
          <Router>
            <Switch>
              <Box>{isWide ? <DesktopLayout /> : <MobileLayout />}</Box>
            </Switch>
          </Router>
        </Col>
      </Row>
    </Container>
  )
}

export default App
