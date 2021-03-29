import { auth, firestore } from 'app/services/Firebase'
import {
  createContext,
  useEffect,
  useReducer,
  useContext,
  useState
} from 'react'
import { Spin } from 'antd'
import { Row, Box } from '@qonsoll/react-design'
import { USERS } from 'app/constants/collections'

const UserAuthContext = createContext()
const UserAuthDispatchContext = createContext()

const userAuthReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA': {
      return action.data
    }
    default: {
      return state
    }
  }
}

const UserAuthProvider = ({ children }) => {
  const [userAuthData, dispatch] = useReducer(userAuthReducer)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    auth.onAuthStateChanged(async (user) => {
      const userData =
        user && (await firestore.collection(USERS).doc(user.uid).get())
      const dispatchData = userData
        ? { ...user, userDBData: userData.data() }
        : user
      await dispatch({
        type: 'SET_DATA',
        data: dispatchData
      })
      console.log('userAuth')
      setLoading(false)
    })
  }, [])

  return (
    <UserAuthContext.Provider value={userAuthData}>
      <UserAuthDispatchContext.Provider value={dispatch}>
        {loading ? (
          <Row h="center" v="center" height="100vh">
            <Box>
              <Spin size="large" />
            </Box>
          </Row>
        ) : (
          children
        )}
      </UserAuthDispatchContext.Provider>
    </UserAuthContext.Provider>
  )
}

const useUserAuthContext = () => {
  const context = useContext(UserAuthContext)

  if (context === undefined) {
    throw new Error(
      'useUserAuthContext must be used within a UserAuthContext.Provider'
    )
  }

  return context
}
function useUserAuthDispatch() {
  const context = useContext(UserAuthDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useUserAuthDispatch must be used within a UserAuthContext.Provider'
    )
  }

  return context
}

const useUserAuth = () => {
  return [useUserAuthContext(), useUserAuthDispatch()]
}

export {
  UserAuthContext,
  UserAuthProvider,
  useUserAuthContext,
  useUserAuthDispatch,
  useUserAuth
}
