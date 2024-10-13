import type { FC } from 'react'

import { Card, Container, Flex, Heading, TextArea } from '@radix-ui/themes'

import * as styles from './bio-form-section.module.scss'
import { Controller, useFormContext } from 'react-hook-form'

export const BioFormSection: FC = () => {
  const { control } = useFormContext<{ bio: string }>()

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            О себе
          </Heading>
          <Flex gap="3">
            <Controller
              control={control}
              name="bio"
              render={({ field }) => (
                <TextArea
                  placeholder="О себе..."
                  resize="none"
                  className={styles['bio-textarea']}
                  {...field}
                />
              )}
            />
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
