import { Box, Container, Row, Col } from '@qonsoll/react-design'
import { SessionSimpleView } from 'app/domains/Session/components/views'

const SessionLogin = (props) => {
  return (
    <Row h="center" v="center" height="100vh" m={2}>
      <Col v="center">
        <SessionSimpleView />
      </Col>
    </Row>
  )
}

export default SessionLogin
