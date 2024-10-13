import type { FC } from 'react'

import { Button, Card, Container, Flex, Heading } from '@radix-ui/themes'
import { FormProvider, useForm } from 'react-hook-form'

import { ProfileFormSection } from '@/entities/profile-form-section'
import { ContactFormSection } from '@/entities/contact-form-section'
import { BioFormSection } from '@/entities/bio-form-section'
import { WorksFormSection } from '@/entities/works-form-section'

export const UserForm: FC = () => {
  const form = useForm<{
    fio: string
    city: string
    birthDate: string
    zodiacSigns: string
    contacts: string[]
    gender: string
    works: {
      name: string
      posts: {
        name: string
        from: string
        to: string
      }[]
      description: string
    }[]
  }>({
    defaultValues: {
      fio: '',
      city: '',
      birthDate: '',
      contacts: [''],
      gender: '',
      works: [
        {
          name: '',
          posts: [
            {
              name: '',
              from: '',
              to: '',
            },
          ],
          description: '',
        },
      ],
    },
  })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((value) => {
          console.debug(value)
        })}
      >
        <Flex direction="column" gap="4">
          <ProfileFormSection />
          <ContactFormSection />
          <BioFormSection />
          <WorksFormSection />
          <Container size="3">
            <Card size="3">
              <Flex direction="column" gap="3">
                <Heading size="3" align="left">
                  Места учебы
                </Heading>
                <Flex gap="3"></Flex>
              </Flex>
            </Card>
          </Container>
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
