import type { FC } from 'react'

import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  TextField,
  Heading,
} from '@radix-ui/themes'

export const LoginForm: FC = () => {
  return (
    <Flex align="center" justify="center" width="100vw" height="100dvh">
      <Container size="1">
        <Card size="3">
          <Flex direction="column" gap="7">
            <Flex direction="column" gap="3">
              <Heading size="3" align="center">
                Login
              </Heading>
              <Grid gap="3">
                <TextField.Root size="3" placeholder="Username" />
                <TextField.Root size="3" placeholder="Password" />
              </Grid>
            </Flex>
            <Grid columns="2" gap="2">
              <Button size="3" variant="surface">
                Registration
              </Button>
              <Button size="3">Login</Button>
            </Grid>
          </Flex>
        </Card>
      </Container>
    </Flex>
  )
}
