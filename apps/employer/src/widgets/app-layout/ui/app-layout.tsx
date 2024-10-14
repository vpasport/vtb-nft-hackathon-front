import type { FC } from 'react'
import type { AppLayoutProps } from '../model/interfaces/app-layout.types'
import { Flex } from '@radix-ui/themes'
import { NavSidebar } from '@/entities/nav-sidebar'

export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <Flex direction="row" width="100vw" height="100dvh">
      <NavSidebar />
      <div
        style={{
          flex: 1,
        }}
      >
        {children}
      </div>
    </Flex>
  )
}
