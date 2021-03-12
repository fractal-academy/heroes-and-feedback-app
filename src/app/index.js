import 'antd/dist/antd.css'
import { Row, Col, Box } from '@qonsoll/react-design'
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  BrowserRouter as Router
} from 'react-router-dom'
import {
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE,
  ROUTES_PATHS
} from 'app/constants'
import {
  StarOutlined,
  UserOutlined,
  SmileOutlined,
  SketchOutlined
} from '@ant-design/icons'
import { useUserAuthContext } from 'app/context'

const App = () => {
  const history = useHistory()
  const user = useUserAuthContext()

  return (
    <Row noGutters h="center">
      <Col cw={['11', '10', '8', '8', '10', '10']}>
        <Router>
          <Switch>
            {user ? (
              <>
                {PROTECTED_ROUTES_VALUE.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
                <Redirect to={ROUTES_PATHS.COMPANIES_ALL} />
              </>
            ) : (
              <>
                {PUBLIC_ROUTES_VALUE.map((route) => (
                  <Route key={route.path} {...route} />
                ))}
                <Redirect to={ROUTES_PATHS.LOGIN} />
              </>
            )}
          </Switch>
        </Router>

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
            onClick={() => history.push(ROUTES_PATHS.BADGES_ALL)}>
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
