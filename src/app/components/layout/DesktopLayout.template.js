import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { Content, Sidebar } from 'app/components'

const DesktopLayout = (props) => {
  const user = useUserAuthContext()

  return (
    <Row noGutters height="inherit">
      {user && (
        <Col cw="auto">
          <Sidebar />
        </Col>
      )}
      <Col height="inherit">
        <Content />
      </Col>
    </Row>
  )
}

export default DesktopLayout
