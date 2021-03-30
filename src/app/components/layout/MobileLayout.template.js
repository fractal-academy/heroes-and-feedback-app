import './Layout.styles.css'
import { useUserAuthContext } from 'app/context'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Content, Header, Navbar } from 'app/components'

const MobileLayout = () => {
  const user = useUserAuthContext()

  return (
    <Box height="inherit">
      {user && (
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>
      )}
      <Row className="scroll" height="inherit">
        <Col height="inherit">
          <Content />
        </Col>
      </Row>
      {user && (
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
      )}
    </Box>
  )
}

export default MobileLayout
