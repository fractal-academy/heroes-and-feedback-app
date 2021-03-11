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
import { Header } from 'app/components'

const ROUTES = {
  // session entity routes
  LOGIN: {
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
    protect: true,
    render: () => (
      <>
        <Header />
        <UserAll />
      </>
    ),
    path: ROUTES_PATHS.USERS_ALL,
    exact: true
  },
  USERS_SHOW: {
    protect: true,
    render: () => (
      <>
        <Header />
        <UserShow />
      </>
    ),
    path: ROUTES_PATHS.USER_SHOW,
    exact: true
  },
  USERS_EDIT: {
    protect: true,
    render: () => (
      <>
        <Header />
        <UserEdit />
      </>
    ),
    path: ROUTES_PATHS.USER_EDIT
  },

  // badge entity routes
  BADGES_ALL: {
    protect: true,
    render: () => (
      <>
        <Header />
        <BadgeAll />
      </>
    ),
    path: ROUTES_PATHS.BADGES_ALL,
    exact: true
  },
  BADGES_SHOW: {
    protect: true,
    render: () => (
      <>
        <Header />
        <BadgeShow />
      </>
    ),
    path: ROUTES_PATHS.BADGE_SHOW,
    exact: true
  },
  BADGES_EDIT: {
    protect: true,
    render: () => (
      <>
        <Header />
        <BadgeEdit />
      </>
    ),
    path: ROUTES_PATHS.BADGE_EDIT
  },

  // company entity routes
  COMPANIES_ALL: {
    protect: true,
    render: () => (
      <>
        <Header />
        <CompanyAll />
      </>
    ),
    path: ROUTES_PATHS.COMPANIES_ALL,
    exact: true
  },
  COMPANIES_SHOW: {
    protect: true,
    render: () => (
      <>
        <Header />
        <CompanyShow />
      </>
    ),
    path: ROUTES_PATHS.COMPANY_SHOW,
    exact: true
  },
  COMPANIES_EDIT: {
    protect: true,
    render: () => (
      <>
        <Header />
        <CompanyEdit />
      </>
    ),
    path: ROUTES_PATHS.COMPANY_EDIT
  },

  // project entity routes
  PROJECTS_ALL: {
    protect: true,
    render: () => (
      <>
        <Header />
        <ProjectAll />
      </>
    ),
    path: ROUTES_PATHS.PROJECTS_ALL,
    exact: true
  },
  PROJECTS_SHOW: {
    protect: true,
    render: () => (
      <>
        <Header />
        <ProjectShow />
      </>
    ),
    path: ROUTES_PATHS.PROJECT_SHOW,
    exact: true
  },
  PROJECTS_EDIT: {
    protect: true,
    render: () => (
      <>
        <Header />
        <ProjectEdit />
      </>
    ),
    path: ROUTES_PATHS.PROJECT_EDIT
  },

  // route for user's personal badges
  PERSONAL_BADGES_ALL: {
    protect: true,
    render: () => (
      <>
        <Header />
        <PersonalBadgeAll />
      </>
    ),
    path: ROUTES_PATHS.PERSONAL_BADGES_ALL,
    exact: true
  }
}

const ROUTES_VALUE = Object.values(ROUTES)
const ROUTES_KEYS = Object.keys(ROUTES)

export default ROUTES
export { ROUTES_VALUE, ROUTES_KEYS }
