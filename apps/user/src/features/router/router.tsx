import type { FC } from 'react'

import { lazy } from 'react'
import {
  Routes as ReactRoutes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import {
  LOGIN_APP_PATH,
  USER_PROFILE_PATH,
  USER_PROFILE_PATH_LINK,
} from 'vtb-shared'

import { ProtectRoutes } from '@/entities/protect-routes'
import { isMicroApp } from '@/shared/constants/app'

const ProfilePage = lazy(() =>
  import('@/pages/profile').then((module) => ({
    default: module.ProfilePage,
  })),
)

export const Router: FC = () => {
  return (
    <ReactRoutes>
      <Route element={<ProtectRoutes />}>
        {/* PROFILE */}
        <Route path={USER_PROFILE_PATH} element={<ProfilePage />} />

        <Route path={'*'} element={<Navigate to={USER_PROFILE_PATH_LINK} />} />
        <Route path={''} element={<Navigate to={USER_PROFILE_PATH_LINK} />} />
      </Route>
      {!isMicroApp && (
        <Route
          path={LOGIN_APP_PATH}
          element={<>тут может быть авторизация для SPA режима</>}
        />
      )}
    </ReactRoutes>
  )
}
