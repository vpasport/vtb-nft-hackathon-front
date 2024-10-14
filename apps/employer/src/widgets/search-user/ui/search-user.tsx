import type { FC } from 'react'

import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import {
  Avatar,
  Box,
  Card,
  Container,
  Flex,
  TextField,
  Text,
  Skeleton,
} from '@radix-ui/themes'
import { Controller, FormProvider, useForm } from 'react-hook-form'

import * as styles from './search-user.module.scss'

export const SearchUser: FC = () => {
  const form = useForm<{
    search: string
  }>({
    defaultValues: {
      search: '',
    },
  })

  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit((values) => console.debug(values))}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <Flex direction="column" gap="4" height="100%">
          <Container
            size="3"
            className={styles['search-user-search-container']}
          >
            <Card size="1">
              <Controller
                control={form.control}
                name="search"
                render={({ field }) => (
                  <TextField.Root placeholder="Найти..." {...field}>
                    <TextField.Slot>
                      <MagnifyingGlassIcon />
                    </TextField.Slot>
                  </TextField.Root>
                )}
              />
            </Card>
          </Container>
          <Container
            size="3"
            className={styles['search-user-results-container']}
          >
            <Flex direction="column" gap="1">
              <Card>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Teodros Girmay
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Engineering
                    </Text>
                  </Box>
                </Flex>
              </Card>
              <Card>
                <Flex gap="3" align="center">
                  <Avatar
                    size="3"
                    src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                    radius="full"
                    fallback="T"
                  />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      Teodros Girmay
                    </Text>
                    <Text as="div" size="2" color="gray">
                      Engineering
                    </Text>
                  </Box>
                </Flex>
              </Card>
              <Card>
                <Flex gap="3" align="center">
                  <Skeleton width="40px" height="40px" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                    </Text>
                    <Text as="div" size="2" color="gray">
                      <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                    </Text>
                  </Box>
                </Flex>
              </Card>
              <Card>
                <Flex gap="3" align="center">
                  <Skeleton width="40px" height="40px" />
                  <Box>
                    <Text as="div" size="2" weight="bold">
                      <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                    </Text>
                    <Text as="div" size="2" color="gray">
                      <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                    </Text>
                  </Box>
                </Flex>
              </Card>
            </Flex>
          </Container>
        </Flex>
      </form>
    </FormProvider>
  )
}
