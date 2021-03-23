import { Row, Col } from '@qonsoll/react-design'
import { SessionSimpleView } from 'app/domains/Session/components/views'

const GoogleLogin = (props) => {
  return (
    <Row h="center" v="center" height="100vh" m={2}>
      <Col cw="5" v="center">
        <SessionSimpleView />
      </Col>
    </Row>
  )
}

export default GoogleLogin
