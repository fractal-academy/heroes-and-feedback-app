import { Button } from 'antd'
import './Navigation.styles.css'
import { ROUTES_PATHS } from 'app/constants'
import { Box } from '@qonsoll/react-design'
import { useHistory } from 'react-router-dom'
import {
  TeamOutlined,
  GroupOutlined,
  TrophyOutlined,
  FundProjectionScreenOutlined
} from '@ant-design/icons'

const Navbar = () => {
  const history = useHistory()

  const navigationProps = [
    {
      icon: <TeamOutlined />,
      onClick: () => history.push(ROUTES_PATHS.USERS_ALL)
    },
    {
      icon: <GroupOutlined />,
      onClick: () => history.push(ROUTES_PATHS.COMPANIES_ALL)
    },
    {
      icon: <FundProjectionScreenOutlined />,
      onClick: () => history.push(ROUTES_PATHS.PROJECTS_ALL)
    },
    {
      icon: <TrophyOutlined />,
      onClick: () => history.push(ROUTES_PATHS.BADGES_ALL)
    }
  ]

  return (
    <Box className="navbar">
      {navigationProps.map((item) => (
        <Box my={0} mx={2}>
          <Button
            type="text"
            shape="circle"
            icon={item?.icon}
            onClick={item?.onClick}></Button>
        </Box>
      ))}
    </Box>
  )
}

export default Navbar
