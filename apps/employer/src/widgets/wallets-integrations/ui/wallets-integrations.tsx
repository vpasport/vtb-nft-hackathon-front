import type { FC } from 'react'

import { Button, Card, Container, Flex, Grid, Heading } from '@radix-ui/themes'
import {
  MetaMaskUIProvider,
  MetaMaskButton,
  useSignMessage,
  useAccount,
  useSDK,
} from '@metamask/sdk-react-ui'
import { useThemeContext } from 'vtb-shared'

const WalletsIntegrations: FC = () => {
  const { mode } = useThemeContext()

  const {
    data: signData,
    isError: isSignError,
    isLoading: isSignLoading,
    isSuccess: isSignSuccess,
    signMessage,
  } = useSignMessage({
    message: 'gm wagmi frens',
  })
  const { isConnected } = useAccount()
  const { ready } = useSDK()

  // console.debug(
  //   ready,
  //   isConnected,
  //   signData,
  //   isSignError,
  //   isSignLoading,
  //   isSignSuccess,
  // )

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Кошельки
          </Heading>
          <Flex gap="3" align="center">
            <MetaMaskButton theme={mode} color="blue" />
            {isConnected && (
              <div>
                <Button onClick={() => signMessage()}>Подписать </Button>
                {isSignSuccess && <div>Signature: {signData}</div>}
                {isSignError && <div>Error signing message</div>}
              </div>
            )}
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}

const WalletsIntegrationsWrapper: FC = () => {
  return (
    <MetaMaskUIProvider
      sdkOptions={{
        dappMetadata: {
          name: 'VTB NFT dAPP',
          url: window.location.href,
        },
        infuraAPIKey: process.env.REACT_APP_INFURA_API_KEY,
      }}
    >
      <WalletsIntegrations />
    </MetaMaskUIProvider>
  )
}

export { WalletsIntegrationsWrapper as WalletsIntegrations }
