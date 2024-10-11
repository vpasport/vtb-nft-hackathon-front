import type { FC } from 'react'

import { Route, Routes } from 'react-router'
import { LazyService, LOGIN_APP_PATH } from 'vtb-shared'
import { BrowserRouter } from 'react-router-dom'

import { MFE } from '@/shared/constants/mfe'
import { PageLoader } from '@/shared/components/page-loader'
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
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
