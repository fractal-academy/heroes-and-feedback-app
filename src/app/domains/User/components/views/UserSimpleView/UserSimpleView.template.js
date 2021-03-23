import { Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'

const UserSimpleView = () => {
  const session = useUserAuthContext()

  return (
    <Row display="flex" h="left" v="center">
      <Col cw="auto" mr={1}>
        <CustomAvatar
          shape={'user'}
          size={20}
          src={session.photoURL}
          name={session.displayName}
        />
      </Col>
      <Col>
        <Typography.Text>{session.displayName}</Typography.Text>
      </Col>
    </Row>
  )
}

export default UserSimpleView
