import 'antd/dist/antd.css'
import { useUserAuthContext } from 'app/context'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import { PUBLIC_ROUTES_VALUE, PROTECTED_ROUTES_VALUE } from 'app/constants'
import { useEffect, useState } from 'react'

const App = () => {
  const user = useUserAuthContext()

  const changeAvailableRoutes = (user) =>
    user ? PROTECTED_ROUTES_VALUE : PUBLIC_ROUTES_VALUE

  const [currentRoutes, setCurrentRoutes] = useState(changeAvailableRoutes())

  useEffect(() => {
    setCurrentRoutes(changeAvailableRoutes(user))
  }, [user])

  return (
    <Router>
      <Switch>
        {currentRoutes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Switch>
    </Router>
  )
}

export default App
