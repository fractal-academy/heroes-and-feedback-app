import { Button, Typography } from 'antd'
// import { useHistory } from 'react-router-dom'
import { GoogleOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'
import { signInWithGoogle } from 'app/services/Auth'
import { useUserAuthDispatch } from 'app/context'

const { Title, Text, Link } = Typography

const SessionSimpleView = (props) => {
  // const history = useHistory()
  const dispatch = useUserAuthDispatch()

  return (
    <Box
      border="lightgray"
      borderWidth="1px"
      borderStyle="solid"
      textAlign="center">
      <Row m={4}>
        <Col>
          <Title level={2}>Sign in</Title>
          <Text>
            Continiue to <Link>Heroes</Link> with Google
          </Text>
        </Col>
      </Row>
      <Row mb={2}>
        <Col>
          <Button
            type="primary"
            onClick={() => {
              signInWithGoogle(dispatch)
            }}>
            <GoogleOutlined />
            Sign in
          </Button>
        </Col>
      </Row>
    </Box>
  )
}

export default SessionSimpleView
