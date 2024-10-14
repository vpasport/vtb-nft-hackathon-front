import type { FC } from 'react'

import { SearchUser } from '@/widgets/search-user'
import { Flex } from '@radix-ui/themes'

export const SearchPage: FC = () => {
  return (
    <Flex justify="center" p="9" gap="5" direction="column" height="100%">
      <SearchUser />
    </Flex>
  )
}
