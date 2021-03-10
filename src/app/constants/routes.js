import ROUTES_PATHS from './routePaths'
import { SessionLogin } from 'app/domains/Session/routes'
import { PersonalBadgeAll } from 'app/domains/PersonalBadge/routes'
import { UserAll, UserEdit, UserShow } from 'app/domains/User/routes'
import { BadgeAll, BadgeEdit, BadgeShow } from 'app/domains/Badge/routes'
import {
  ProjectAll,
  ProjectEdit,
  ProjectShow
} from 'app/domains/Project/routes'
import {
  CompanyAll,
  CompanyEdit,
  CompanyShow
} from 'app/domains/Company/routes'
import { RedirectHOC } from 'app/components'

const ROUTES = {
  // session entity routes
  LOGIN: {
    notProtected: true,
    render: () => <SessionLogin />,
    path: ROUTES_PATHS.LOGIN,
    exact: true
  },
  REJECT_LOGIN: {
    path: ROUTES_PATHS.REJECT_LOGIN,
    exact: true
  },

  // user entity routes
  USERS_ALL: {
    render: () => (
      <RedirectHOC>
        <UserAll />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.USERS_ALL,
    exact: true
  },
  USERS_SHOW: {
    render: () => (
      <RedirectHOC>
        <UserShow />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.USER_SHOW,
    exact: true
  },
  USERS_EDIT: {
    render: () => (
      <RedirectHOC>
        <UserEdit />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.USER_EDIT
  },

  // badge entity routes
  BADGES_ALL: {
    render: () => (
      <RedirectHOC>
        <BadgeAll />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.BADGES_ALL,
    exact: true
  },
  BADGES_SHOW: {
    render: () => (
      <RedirectHOC>
        <BadgeShow />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.BADGE_SHOW,
    exact: true
  },
  BADGES_EDIT: {
    render: () => (
      <RedirectHOC>
        <BadgeEdit />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.BADGE_EDIT
  },

  // company entity routes
  COMPANIES_ALL: {
    render: () => (
      <RedirectHOC>
        <CompanyAll />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.COMPANIES_ALL,
    exact: true
  },
  COMPANIES_SHOW: {
    render: () => (
      <RedirectHOC>
        <CompanyShow />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.COMPANY_SHOW,
    exact: true
  },
  COMPANIES_EDIT: {
    render: () => (
      <RedirectHOC>
        <CompanyEdit />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.COMPANY_EDIT
  },

  // project entity routes
  PROJECTS_ALL: {
    render: () => (
      <RedirectHOC>
        <ProjectAll />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.PROJECTS_ALL,
    exact: true
  },
  PROJECTS_SHOW: {
    render: () => (
      <RedirectHOC>
        <ProjectShow />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.PROJECT_SHOW,
    exact: true
  },
  PROJECTS_EDIT: {
    render: () => (
      <RedirectHOC>
        <ProjectEdit />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.PROJECT_EDIT
  },

  // route for user's personal badges
  PERSONAL_BADGES_ALL: {
    render: () => (
      <RedirectHOC>
        <PersonalBadgeAll />
      </RedirectHOC>
    ),
    path: ROUTES_PATHS.PERSONAL_BADGES_ALL,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
