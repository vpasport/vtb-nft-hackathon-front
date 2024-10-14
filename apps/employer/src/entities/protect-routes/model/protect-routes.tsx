import type { FC } from 'react'

import { useState } from 'react'
import { PageLoader } from 'vtb-shared'
import { ProtectedRouterProps } from './interfaces/protected-router.types'

export const ProtectRoutes: FC<ProtectedRouterProps> = ({ children }) => {
  const [isLoading, setLoading] = useState(false)

  return isLoading ? <PageLoader /> : <>{children}</>
}
