import useMedia from 'use-media'
import { useEffect, useState } from 'react'
import { Row, Col } from '@qonsoll/react-design'
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

  const isWide = useMedia({ minWidth: '1024px' })

  return (
    <Row h="center" mt={4}>
      <Col cw={(isWide && 9) || 12}>
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
      </Col>
    </Row>
  )
}

export default Content
