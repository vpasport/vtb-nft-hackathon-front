import type { FC } from 'react'

import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  TextField,
} from '@radix-ui/themes'
import { PlusIcon } from '@radix-ui/react-icons'
import { Controller, useFormContext, useWatch } from 'react-hook-form'

export const ContactFormSection: FC = () => {
  const { control, setValue } = useFormContext<{
    contacts: string[]
  }>()
  const { contacts } = useWatch({ control })

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Контакты
          </Heading>
          <Grid gap="3" columns="2">
            {contacts?.map((_, idx) => (
              <Controller
                control={control}
                name={`contacts.${idx}`}
                render={({ field: { value, onChange } }) => (
                  <TextField.Root
                    placeholder="Контакт"
                    value={value}
                    name={`contacts.${idx}`}
                    onChange={onChange}
                  />
                )}
              />
            ))}
          </Grid>
          <Grid gap="3" columns="2">
            <Button
              variant="soft"
              color="cyan"
              onClick={() => {
                setValue('contacts', [...(contacts ?? []), ''])
              }}
            >
              <PlusIcon />
              Добавить
            </Button>
          </Grid>
        </Flex>
      </Card>
    </Container>
  )
}
