import { OrganizationProfile } from '@/widgets/organization-profile'
import { Flex } from '@radix-ui/themes'
import type { FC } from 'react'

export const OrganizationPage: FC = () => {
  return (
    <Flex justify="center" p="9" gap="5" direction="column">
      <OrganizationProfile />
    </Flex>
  )
}
