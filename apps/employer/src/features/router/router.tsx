import type { FC } from 'react'

import { lazy } from 'react'
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom'
import {
  EMPLOYER_ORGANIZATION_PATH,
  EMPLOYER_ORGANIZATION_PATH_LINK,
  LOGIN_APP_PATH,
} from 'vtb-shared'

import { ProtectRoutes } from '@/entities/protect-routes'
import { isMicroApp } from '@/shared/constants/app'

const OrganizationPage = lazy(() =>
  import('@/pages/organization').then((module) => ({
    default: module.OrganizationPage,
  })),
)

export const Router: FC = () => {
  return (
    <ReactRoutes>
      <Route element={<ProtectRoutes />}>
        {/* PROFILE */}
        <Route
          path={EMPLOYER_ORGANIZATION_PATH}
          element={<OrganizationPage />}
        />

        <Route
          path={'*'}
          element={<Navigate to={EMPLOYER_ORGANIZATION_PATH_LINK} />}
        />
        <Route
          path={''}
          element={<Navigate to={EMPLOYER_ORGANIZATION_PATH_LINK} />}
        />
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
