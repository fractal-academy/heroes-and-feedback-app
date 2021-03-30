import { Button } from 'antd'
import { logOut } from 'app/services/Auth'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { LogoutOutlined } from '@ant-design/icons'
import { UserSimpleView } from 'app/domains/User/components/views'

const Header = () => {
  const history = useHistory()
  const session = useUserAuthContext()

  const path = ROUTES_PATHS.USER_SHOW.replace(':id', session.uid)

  return (
    <Row noGutters h="right" pt={2} pb={2}>
      <Col cw="auto" display="flex">
        <UserSimpleView size={32} onClick={() => history.push(path)} />
        <Button
          danger
          type="primary"
          shape="circle"
          icon={<LogoutOutlined />}
          onClick={() => logOut(history)}></Button>
      </Col>
    </Row>
  )
}

export default Header
