import { Menu, Dropdown } from 'antd'
import { logOut } from 'app/services/Auth'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuthContext } from 'app/context'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { UserSimpleView } from 'app/domains/User/components/views'

const { Item } = Menu

const Header = () => {
  const history = useHistory()
  const session = useUserAuthContext()

  const path = ROUTES_PATHS.USER_SHOW.replace(':id', session.uid)

  const menu = (
    <Menu>
      <Item icon={<UserOutlined />} onClick={() => history.push(path)}>
        Profile
      </Item>
      <Item danger icon={<LogoutOutlined />} onClick={() => logOut(history)}>
        Log out
      </Item>
    </Menu>
  )

  return (
    <Row noGutters h="between" pt={2} pb={2}>
      <Col cw="auto">
        <img
          src="/assets/logo-white.svg"
          alt="Logo"
          style={{ height: '40px' }}
        />
      </Col>
      <Col cw="auto" display="flex">
        <Dropdown overlay={menu} placement="bottomRight" trigger={['click']}>
          <UserSimpleView size={32} />
        </Dropdown>
      </Col>
    </Row>
  )
}

export default Header
