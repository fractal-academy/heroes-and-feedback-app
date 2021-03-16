import { Layout, Menu } from 'antd'
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

const Navigation = () => {
  const history = useHistory()
  const session = useUserAuthContext()

  const path = ROUTES_PATHS.USER_SHOW.replace(':id', session.uid)

  return (
    <Row h="center" mr={2}>
      <Col cw="auto">
        <Layout.Sider>
          <Menu mode="inline" defaultSelectedKeys={['1']}>
            <Item key="0" onClick={() => history.push(path)}>
              <UserSimpleView />
            </Item>
            <Item
              key="1"
              icon={<GroupOutlined />}
              onClick={() => history.push(ROUTES_PATHS.COMPANIES_ALL)}>
              Companies
            </Item>
            <Item
              key="2"
              icon={<FundProjectionScreenOutlined />}
              onClick={() => history.push(ROUTES_PATHS.PROJECTS_ALL)}>
              Projects
            </Item>
            <Item
              key="3"
              icon={<TeamOutlined />}
              onClick={() => history.push(ROUTES_PATHS.USERS_ALL)}>
              Users
            </Item>
            <Item
              key="4"
              icon={<TrophyOutlined />}
              onClick={() => history.push(ROUTES_PATHS.BADGES_ALL)}>
              Badges
            </Item>
            <Item
              key="5"
              danger
              icon={<LogoutOutlined />}
              onClick={() => logOut(history)}>
              Log out
            </Item>
          </Menu>
        </Layout.Sider>
      </Col>
    </Row>
  )
}

export default Navigation
