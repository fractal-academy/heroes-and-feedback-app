import useMedia from 'use-media'
import { useEffect, useState } from 'react'
import { Row, Col } from '@qonsoll/react-design'
import { useUserAuth } from 'app/context'
import { Route, Redirect } from 'react-router-dom'
import {
  PUBLIC_ROUTES_VALUE,
  PROTECTED_ROUTES_VALUE,
  ROUTES_PATHS
} from 'app/constants'
import { firestore } from 'app/services'
import { USERS } from 'app/constants/collections'
import { message } from 'antd'

const Content = () => {
  const [user, dispatch] = useUserAuth()

  const changeAvailableRoutes = (user) =>
    user ? PROTECTED_ROUTES_VALUE : PUBLIC_ROUTES_VALUE

  const [currentRoutes, setCurrentRoutes] = useState(
    changeAvailableRoutes(user)
  )

  useEffect(() => {
    setCurrentRoutes(changeAvailableRoutes(user))
  }, [user])

  useEffect(() => {
    const unsubscribe = () => {
      user &&
        firestore
          .collection(USERS)
          .where('id', '==', user.uid)
          .onSnapshot((snapshot) => {
            const userDocChanges = snapshot.docChanges()[0]
            dispatch({
              type: 'SET_DATA',
              data: { ...user, userDBData: snapshot.docs[0].data() }
            })
            if (
              userDocChanges.type === 'modified' &&
              user.userDBData.role !== snapshot.docs[0].data().role
            ) {
              message.success(
                `Your role was changed to: ${snapshot.docs[0].data().role}`
              )
            }
          })
    }
    return () => {
      unsubscribe && unsubscribe()
    }
  }, [])

  const isWide = useMedia({ minWidth: '1024px' })

  return (
    <Row h="center" height="inherit">
      <Col cw={(isWide && 9) || 12} height="inherit">
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
