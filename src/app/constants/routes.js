import ROUTES_PATHS from './routePaths'

const ROUTES = {
  LOGIN: {
    // render: () => <CustomAvatar shape="avatar" />,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  REJECT_LOGIN: {
    //render: () => <RejectLogin />,
    path: ROUTES_PATHS.REJECT_LOGIN,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
