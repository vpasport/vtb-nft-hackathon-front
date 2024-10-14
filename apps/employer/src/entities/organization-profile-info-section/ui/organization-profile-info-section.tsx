import type { FC } from 'react'

import {
  Avatar,
  Card,
  Container,
  Flex,
  Heading,
  TextField,
} from '@radix-ui/themes'
import { Controller, useFormContext } from 'react-hook-form'

export const OrganizationProfileInfoSection: FC = () => {
  const { control } = useFormContext<{
    name: string
  }>()

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Информация
          </Heading>
          <Flex gap="3">
            <Avatar size="9" fallback={'C'} />
            <Flex direction="column" width="100%" gap="3">
              <Controller
                control={control}
                name="name"
                render={({ field }) => (
                  <TextField.Root placeholder="Название" {...field} />
                )}
              />
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
