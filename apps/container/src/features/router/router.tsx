import type { FC } from 'react'

import { Route, Routes } from 'react-router'
import { LazyService, LOGIN_APP_PATH, USER_APP_PATH } from 'vtb-shared'
import { BrowserRouter } from 'react-router-dom'

import { MFE } from '@/shared/constants/mfe'
import { PageLoader } from 'vtb-shared/src/shared/components/page-loader'
import { ProtectRoutes } from '@/entities/protect-routes'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectRoutes />}>
          <Route
            path={LOGIN_APP_PATH + '/*'}
            element={
              <LazyService
                microservice={{
                  url: MFE.login.vtbNFT.url,
                  scope: MFE.login.vtbNFT.scope,
                  module: MFE.login.vtbNFT.module,
                }}
                loadingMessage={<PageLoader />}
                verified
              />
            }
          />
          <Route
            path={USER_APP_PATH + '/*'}
            element={
              <LazyService
                microservice={{
                  url: MFE.user.vtbNFT.url,
                  scope: MFE.user.vtbNFT.scope,
                  module: MFE.user.vtbNFT.module,
                }}
                loadingMessage={<PageLoader />}
                verified
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
