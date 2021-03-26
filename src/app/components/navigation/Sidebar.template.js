import { Menu } from 'antd'
import { logOut } from 'app/services/Auth'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import { useUserAuthContext } from 'app/context'
import { Row, Col } from '@qonsoll/react-design'
import {
  TeamOutlined,
  GroupOutlined,
  TrophyOutlined,
  LogoutOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'
import { UserSimpleView } from 'app/domains/User/components/views'

const { Item } = Menu

const Sidebar = () => {
  const history = useHistory()
  const session = useUserAuthContext()

  const path = ROUTES_PATHS.USER_SHOW.replace(':id', session.uid)
  const navigationButtonProps = [
    {
      key: path,
      onClick: () => history.push(path),
      name: <UserSimpleView size={20} withName={true} />
    },
    {
      key: ROUTES_PATHS.COMPANIES_ALL,
      icon: <GroupOutlined />,
      onClick: () => history.push(ROUTES_PATHS.COMPANIES_ALL),
      name: 'Companies'
    },
    {
      key: ROUTES_PATHS.PROJECTS_ALL,
      icon: <FundProjectionScreenOutlined />,
      onClick: () => history.push(ROUTES_PATHS.PROJECTS_ALL),
      name: 'Projects'
    },
    {
      key: ROUTES_PATHS.USERS_ALL,
      icon: <TeamOutlined />,
      onClick: () => history.push(ROUTES_PATHS.USERS_ALL),
      name: 'Users'
    },
    {
      key: ROUTES_PATHS.BADGES_ALL,
      icon: <TrophyOutlined />,
      onClick: () => history.push(ROUTES_PATHS.BADGES_ALL),
      name: 'Badges'
    },
    {
      key: ROUTES_PATHS.LOGIN,
      danger: true,
      icon: <LogoutOutlined />,
      onClick: () => logOut(history),
      name: 'Log out'
    }
  ]
  const defaultSelected = navigationButtonProps.filter((item) =>
    history.location.pathname.includes(item.key)
  )
  return (
    <Row h="center" mr={2}>
      <Col cw="auto">
        <Menu
          mode="inline"
          defaultSelectedKeys={
            defaultSelected[0]?.key || ROUTES_PATHS.COMPANIES_ALL
          }>
          {navigationButtonProps.map((item) => (
            <Item
              key={item.key}
              icon={item?.icon}
              danger={item?.danger}
              onClick={item.onClick}>
              {item?.name}
            </Item>
          ))}
        </Menu>
      </Col>
    </Row>
  )
}

export default Sidebar
