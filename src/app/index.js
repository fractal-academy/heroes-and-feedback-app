import 'antd/dist/antd.css'
import { Row, Col, Box } from '@qonsoll/react-design'
import { Switch, Route, Redirect, useHistory } from 'react-router-dom'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'
import {
  StarOutlined,
  UserOutlined,
  SmileOutlined,
  SketchOutlined
} from '@ant-design/icons'

const App = () => {
  const history = useHistory()

  return (
    <Row noGutters h="center">
      <Col cw={['11', '10', '8', '8', '10', '10']}>
        <Switch>
          {ROUTES_VALUE.map((route) => (
            <Route key={route.path} {...route} />
          ))}
          <Redirect to={ROUTES_PATHS.LOGIN} />
        </Switch>

        {/* Temporary tool */}
        <Box
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            position: 'fixed',
            width: '100%',
            bottom: '0',
            left: '0',
            fontSize: '30px'
          }}>
          <Box
            my={0}
            mx={2}
            onClick={() => history.push(ROUTES_PATHS.USERS_ALL)}>
            <UserOutlined />
          </Box>
          <Box
            my={0}
            mx={2}
            onClick={() => history.push(ROUTES_PATHS.BADGES_ALL)}>
            <SmileOutlined />
          </Box>
          <Box
            my={0}
            mx={2}
            onClick={() => history.push(ROUTES_PATHS.COMPANIES_ALL)}>
            <SketchOutlined />
          </Box>
          <Box
            my={0}
            mx={2}
            onClick={() => history.push(ROUTES_PATHS.PROJECTS_ALL)}>
            <StarOutlined />
          </Box>
        </Box>
      </Col>
    </Row>
  )
}

export default App
