import ROUTES_PATHS from './routePaths'
import { GoogleLogin } from 'app/domains/Session/routes'

const PUBLIC_ROUTES = {
  // session entity routes
  LOGIN: {
    component: GoogleLogin,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  REJECT_LOGIN: {
    path: ROUTES_PATHS.REJECT_LOGIN,
    exact: true
  }
}

const PUBLIC_ROUTES_VALUE = Object.values(PUBLIC_ROUTES)
const PUBLIC_ROUTES_KEYS = Object.keys(PUBLIC_ROUTES)

export default PUBLIC_ROUTES
export { PUBLIC_ROUTES_VALUE, PUBLIC_ROUTES_KEYS }
