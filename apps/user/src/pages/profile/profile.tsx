import type { FC } from 'react'

import { Flex } from '@radix-ui/themes'

import { WalletsIntegrations } from '@/widgets/wallets-integrations'
import { UserForm } from '@/widgets/user-form'

export const ProfilePage: FC = () => {
  return (
    <Flex justify="center" p="9" gap="5" direction="column">
      <WalletsIntegrations />
      <UserForm />
    </Flex>
  )
}
