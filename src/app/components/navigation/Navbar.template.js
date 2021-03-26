import { Menu } from 'antd'
import './Navigation.styles.css'
import { ROUTES_PATHS } from 'app/constants'
import { useHistory } from 'react-router-dom'
import {
  TeamOutlined,
  GroupOutlined,
  TrophyOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'

const { Item } = Menu

const Navbar = () => {
  const history = useHistory()

  const navigationProps = [
    {
      icon: <TeamOutlined />,
      key: ROUTES_PATHS.USERS_ALL,
      onClick: () => history.push(ROUTES_PATHS.USERS_ALL)
    },
    {
      icon: <GroupOutlined />,
      key: ROUTES_PATHS.COMPANIES_ALL,
      onClick: () => history.push(ROUTES_PATHS.COMPANIES_ALL)
    },
    {
      icon: <FundProjectionScreenOutlined />,
      key: ROUTES_PATHS.PROJECTS_ALL,
      onClick: () => history.push(ROUTES_PATHS.PROJECTS_ALL)
    },
    {
      icon: <TrophyOutlined />,
      key: ROUTES_PATHS.BADGES_ALL,
      onClick: () => history.push(ROUTES_PATHS.BADGES_ALL)
    }
  ]

  const defaultSelected = navigationProps.filter((item) =>
    history.location.pathname.includes(item.key)
  )

  return (
    <Menu
      mode="horizontal"
      className="navbar"
      defaultSelectedKeys={
        defaultSelected[0]?.key || ROUTES_PATHS.COMPANIES_ALL
      }>
      {navigationProps.map((item) => (
        <Item key={item.key} icon={item?.icon} onClick={item.onClick} />
      ))}
    </Menu>
  )
}

export default Navbar
