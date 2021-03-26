import useMedia from 'use-media'
import { Row, Col } from '@qonsoll/react-design'
import { SessionSimpleView } from 'app/domains/Session/components/views'

const GoogleLogin = (props) => {
  const isWide = useMedia({ minWidth: '768px' })

  return (
    <Row h="center" v="center" height="100vh" m={2}>
      <Col cw={(!isWide && '12') || '6'} v="center">
        <SessionSimpleView />
      </Col>
    </Row>
  )
}

export default GoogleLogin
