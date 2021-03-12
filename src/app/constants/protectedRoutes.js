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
import ROUTES_PATHS from './routePaths'

const PROTECTED_ROUTES = {
  // user entity routes
  USERS_ALL: {
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

const PROTECTED_ROUTES_VALUE = Object.values(PROTECTED_ROUTES)
const PROTECTED_ROUTES_KEYS = Object.keys(PROTECTED_ROUTES)

export default PROTECTED_ROUTES
export { PROTECTED_ROUTES_VALUE, PROTECTED_ROUTES_KEYS }
