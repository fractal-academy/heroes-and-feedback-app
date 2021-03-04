import { Switch, Route, Redirect } from 'react-router-dom'
import { ROUTES_PATHS, ROUTES_VALUE } from 'app/constants'
import 'antd/dist/antd.css'

const App = () => {
  return (
    <Switch>
      {ROUTES_VALUE.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Redirect to={ROUTES_PATHS.LOGIN} />
    </Switch>
  )
}

export default App
