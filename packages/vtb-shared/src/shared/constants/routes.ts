import { generatePath } from 'react-router-dom'

// LOGIN APP ROUTES
export const LOGIN_APP_PATH = '/login'
export const LOGIN_APP_PATH_LINK = generatePath(LOGIN_APP_PATH)

// USER APP ROUTES
export const USER_APP_PATH = '/user'
export const USER_APP_PATH_LINK = generatePath(USER_APP_PATH)
export const USER_PROFILE_PATH = '/profile'
export const USER_PROFILE_PATH_LINK = generatePath(
  USER_APP_PATH + USER_PROFILE_PATH,
)
