import { auth } from 'app/services/Firebase'
import { ROUTES_PATHS } from 'app/constants'

const logOut = (history) => {
  auth
    .signOut()
    .then(() => history.push(ROUTES_PATHS.LOGIN))
    .catch((e) => {
      console.log(e.message)
    })
}

export default logOut
