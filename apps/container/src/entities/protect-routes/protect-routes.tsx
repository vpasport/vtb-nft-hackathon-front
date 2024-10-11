import type { FC } from 'react'

import { useState } from 'react'
import { Outlet } from 'react-router'

import { PageLoader } from '@/shared/components/page-loader'

export const ProtectRoutes: FC = () => {
  const [isLoading, setLoading] = useState(false)

  return isLoading ? <PageLoader /> : <Outlet />
}
