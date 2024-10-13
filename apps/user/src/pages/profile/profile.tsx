import type { FC } from 'react'

import { Flex } from '@radix-ui/themes'

import { WalletsIntegrations } from '@/widgets/wallets-integrations'

export const ProfilePage: FC = () => {
  return (
    <Flex justify="center" p="9">
      <WalletsIntegrations />
    </Flex>
  )
}
