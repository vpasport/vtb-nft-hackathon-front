import type { FC } from 'react'

import { lazy, Suspense } from 'react'
import {
  Routes as ReactRoutes,
  Route,
  Navigate,
  Outlet,
} from 'react-router-dom'
import {
  EMPLOYER_ORGANIZATION_PATH,
  EMPLOYER_ORGANIZATION_PATH_LINK,
  EMPLOYER_SEARCH_PATH,
  EMPLOYER_USER_PATH,
  LOGIN_APP_PATH,
  PageLoader,
} from 'vtb-shared'

import { ProtectRoutes } from '@/entities/protect-routes'
import { isMicroApp } from '@/shared/constants/app'
import { AppLayout } from '@/widgets/app-layout'

const OrganizationPage = lazy(() =>
  import('@/pages/organization').then((module) => ({
    default: module.OrganizationPage,
  })),
)
const SearchPage = lazy(() =>
  import('@/pages/search').then((module) => ({
    default: module.SearchPage,
  })),
)
const UserPage = lazy(() =>
  import('@/pages/user').then((module) => ({
    default: module.UserPage,
  })),
)

export const Router: FC = () => {
  return (
    <ReactRoutes>
      <Route
        element={
          <ProtectRoutes>
            <AppLayout>
              <Suspense fallback={<PageLoader />}>
                <Outlet />
              </Suspense>
            </AppLayout>
          </ProtectRoutes>
        }
      >
        {/* PROFILE */}
        <Route
          path={EMPLOYER_ORGANIZATION_PATH}
          element={<OrganizationPage />}
        />

        {/* SEARCH */}
        <Route path={EMPLOYER_SEARCH_PATH} element={<SearchPage />} />

        {/* USERS */}
        <Route path={EMPLOYER_USER_PATH} element={<UserPage />} />

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
