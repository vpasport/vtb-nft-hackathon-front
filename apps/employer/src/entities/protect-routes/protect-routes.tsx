import type { FC } from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router'
import { PageLoader } from 'vtb-shared'

export const ProtectRoutes: FC = () => {
  const [isLoading, setLoading] = useState(false)

  return isLoading ? <PageLoader /> : <Outlet />
}
