import type { FC } from 'react'

import { Button, Flex, Spinner } from '@radix-ui/themes'
import { LazyService } from 'vtb-shared'
import { MFE } from '@/shared/constants/mfe'

export const ContainerApp: FC = () => {
  return (
    <Flex>
      <Button>container app</Button>
      <LazyService
        microservice={{
          url: MFE.login.vtbNFT.url,
          scope: MFE.login.vtbNFT.scope,
          module: MFE.login.vtbNFT.module,
        }}
        loadingMessage={<Spinner />}
      />
    </Flex>
  )
}
