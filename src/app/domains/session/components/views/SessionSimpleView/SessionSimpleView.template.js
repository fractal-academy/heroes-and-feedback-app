import { Button, Spin, Typography } from 'antd'
import { GoogleOutlined } from '@ant-design/icons'
import { Row, Col, Box } from '@qonsoll/react-design'
import { loginWithGoogle } from 'app/services/Auth'
import { Redirect, useHistory } from 'react-router-dom'

const { Title, Text, Link } = Typography

const SessionSimpleView = (props) => {
  const history = useHistory()
  return (
    <Row h="center" display="flex">
      <Col>
        <Box m={4}>
          <Title level={2}>Sign in</Title>
          <Text>
            Continiue to <Link>Heroes</Link> with Google
          </Text>
        </Box>
        <Box mb={2}>
          <Button type="primary" onClick={() => loginWithGoogle(history)}>
            <GoogleOutlined />
            Sign in
          </Button>
        </Box>
      </Col>
    </Row>
  )
}

export default SessionSimpleView
