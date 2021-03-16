const ROUTES_PATHS = {
  LOGIN: '/login',
  REJECT_LOGIN: '/reject-login',
  // user entity routes
  USERS_ALL: '/users',
  USER_SHOW: '/users/:id',
  USER_EDIT: '/users/:id/edit',
  USER_CREATE: '/user/create',
  // company entity routes
  COMPANIES_ALL: '/companies',
  COMPANY_SHOW: '/companies/:id',
  COMPANY_EDIT: '/companies/:id/edit',
  COMPANY_CREATE: '/company/create',
  // project entity routes
  PROJECTS_ALL: '/projects',
  PROJECT_SHOW: '/projects/:id',
  PROJECT_EDIT: '/projects/:id/edit',
  PROJECT_CREATE: '/project/create',
  // route for user's personal badges
  PERSONAL_BADGES_ALL: '/personalBadges',
  // badge entity routes
  BADGES_ALL: '/badges',
  BADGE_SHOW: '/badges/:id',
  BADGE_EDIT: '/badges/:id/edit',
  BADGE_CREATE: '/badge/create'
}

export default ROUTES_PATHS
