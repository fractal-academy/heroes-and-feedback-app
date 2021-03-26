import { Box } from '@qonsoll/react-design'
import { useEffect, useState } from 'react'
import { useUserAuthContext } from 'app/context'
import { Route, Redirect } from 'react-router-dom'
import {
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE,
  ROUTES_PATHS
} from 'app/constants'

const Content = () => {
  const user = useUserAuthContext()

  const changeAvailableRoutes = (user) =>
    user ? PROTECTED_ROUTES_VALUE : PUBLIC_ROUTES_VALUE

  const [currentRoutes, setCurrentRoutes] = useState(
    changeAvailableRoutes(user)
  )

  useEffect(() => {
    setCurrentRoutes(changeAvailableRoutes(user))
  }, [user])

  return (
    <Box>
      {currentRoutes.map((route) => (
        <Route key={route.path} {...route} />
      ))}
      <Route
        exact
        path="/"
        render={() => {
          return (
            <Redirect
              to={user ? ROUTES_PATHS.COMPANIES_ALL : ROUTES_PATHS.LOGIN}
            />
          )
        }}
      />
    </Box>
  )
}

export default Content
