import { Flex, Spinner } from '@radix-ui/themes'
import type { FC } from 'react'

export const PageLoader: FC = () => {
  return (
    <Flex
      justify="center"
      align="center"
      position="fixed"
      height="100dvh"
      width="100vw"
    >
      <Spinner size="3" />
    </Flex>
  )
}
