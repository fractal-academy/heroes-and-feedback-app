import { Typography } from 'antd'
import { CustomAvatar } from 'app/components'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'

const UserSimpleView = (props) => {
  const { withName, size, onClick } = props

  const session = useUserAuthContext()

  return (
    <Row display="flex" h="left" v="center" onClick={onClick}>
      <Col cw="auto" mr={1}>
        <CustomAvatar
          shape={'user'}
          size={size}
          src={session.photoURL}
          name={session.displayName}
        />
      </Col>
      {withName && (
        <Col>
          <Typography.Text>{session.displayName}</Typography.Text>
        </Col>
      )}
    </Row>
  )
}

export default UserSimpleView
