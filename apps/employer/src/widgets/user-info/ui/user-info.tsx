import type { FC } from 'react'

import { Flex } from '@radix-ui/themes'
import { UserInfoCard } from '@/entities/user-info-card'
import { AchievementsCard } from '@/entities/achievements-card'
import { UserBioCard } from '@/entities/user-bio-card'
import { WorkPlacesCard } from '@/entities/work-places-card/ui/work-places-card'

export const UserInfo: FC = () => {
  return (
    <Flex
      direction="row"
      gap="3"
      overflow="auto"
      height="100%"
      width="100%"
      p="3"
    >
      <Flex
        direction="column"
        gap="3"
        height="fit-content"
        style={{ flex: 1 }}
        position="sticky"
        top="0"
      >
        <UserInfoCard />
        <AchievementsCard />
      </Flex>
      <Flex direction="column" gap="3" height="fit-content" style={{ flex: 1 }}>
        <UserBioCard />
        <WorkPlacesCard />
      </Flex>
      <Flex
        direction="column"
        gap="3"
        height="fit-content"
        style={{ flex: 1 }}
      ></Flex>
    </Flex>
  )
}
