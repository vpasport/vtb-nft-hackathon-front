import { OrganizationProfileInfoSection } from '@/entities/organization-profile-info-section'
import { OrganizationProfileVerificationSection } from '@/entities/organization-profile-verification-section'
import { Button, Card, Container, Flex } from '@radix-ui/themes'
import type { FC } from 'react'

import { FormProvider, useForm } from 'react-hook-form'

export const OrganizationProfile: FC = () => {
  const form = useForm<{
    name: string
  }>({
    defaultValues: {
      name: '',
    },
  })

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit((values) => console.debug(values))}>
        <Flex direction="column" gap="4">
          <OrganizationProfileVerificationSection />

          <OrganizationProfileInfoSection />

          <Container size="3">
            <Card size="3">
              <Flex gap="3" direction="row-reverse">
                <Button type="submit">Сохранить</Button>
              </Flex>
            </Card>
          </Container>
        </Flex>
      </form>
    </FormProvider>
  )
}
