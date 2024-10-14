import { CheckIcon } from '@radix-ui/react-icons'
import { Button, Card, Container, Flex, Heading } from '@radix-ui/themes'
import type { FC } from 'react'

export const OrganizationProfileVerificationSection: FC = () => {
  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Верификация
          </Heading>
          <Flex gap="3">
            <Button>
              <CheckIcon /> Пройти верификацию
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
