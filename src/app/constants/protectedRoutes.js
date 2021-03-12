import { PersonalBadgesAll } from 'app/domains/PersonalBadge/routes'
import { UsersAll, UserEdit, UserShow } from 'app/domains/User/routes'
import { BadgesAll, BadgeEdit, BadgeShow } from 'app/domains/Badge/routes'
import {
  ProjectsAll,
  ProjectEdit,
  ProjectShow
} from 'app/domains/Project/routes'
import {
  CompaniesAll,
  CompanyEdit,
  CompanyShow
} from 'app/domains/Company/routes'
import ROUTES_PATHS from './routePaths'

const PROTECTED_ROUTES = {
  // user entity routes
  USERS_ALL: {
    component: UsersAll,
    path: ROUTES_PATHS.USERS_ALL,
    exact: true
  },
  USER_SHOW: {
    component: UserShow,
    path: ROUTES_PATHS.USER_SHOW,
    exact: true
  },
  USER_EDIT: {
    component: UserEdit,
    path: ROUTES_PATHS.USER_EDIT
  },

  // badge entity routes
  BADGES_ALL: {
    component: BadgesAll,
    path: ROUTES_PATHS.BADGES_ALL,
    exact: true
  },
  BADGE_SHOW: {
    component: BadgeShow,
    path: ROUTES_PATHS.BADGE_SHOW,
    exact: true
  },
  BADGE_EDIT: {
    component: BadgeEdit,
    path: ROUTES_PATHS.BADGE_EDIT
  },

  // company entity routes
  COMPANIES_ALL: {
    component: CompaniesAll,
    path: ROUTES_PATHS.COMPANIES_ALL,
    exact: true
  },
  COMPANY_SHOW: {
    component: CompanyShow,
    path: ROUTES_PATHS.COMPANY_SHOW,
    exact: true
  },
  COMPANY_EDIT: {
    component: CompanyEdit,
    path: ROUTES_PATHS.COMPANY_EDIT
  },

  // project entity routes
  PROJECTS_ALL: {
    component: ProjectsAll,
    path: ROUTES_PATHS.PROJECTS_ALL,
    exact: true
  },
  PROJECT_SHOW: {
    component: ProjectShow,
    path: ROUTES_PATHS.PROJECT_SHOW,
    exact: true
  },
  PROJECT_EDIT: {
    component: ProjectEdit,
    path: ROUTES_PATHS.PROJECT_EDIT
  },

  // route for user's personal badges
  PERSONAL_BADGES_ALL: {
    component: PersonalBadgesAll,
    path: ROUTES_PATHS.PERSONAL_BADGES_ALL,
    exact: true
  }
}

const PROTECTED_ROUTES_VALUE = Object.values(PROTECTED_ROUTES)
const PROTECTED_ROUTES_KEYS = Object.keys(PROTECTED_ROUTES)

export default PROTECTED_ROUTES
export { PROTECTED_ROUTES_VALUE, PROTECTED_ROUTES_KEYS }
