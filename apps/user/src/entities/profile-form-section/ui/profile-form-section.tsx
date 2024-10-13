import type { FC } from 'react'

import {
  Avatar,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Select,
  TextField,
} from '@radix-ui/themes'
import { Controller, useFormContext } from 'react-hook-form'

import { useDateMask } from '@/shared/hooks/date-mask'
import { zodiacSigns } from '../model/constants/zodiac-signs'

export const ProfileFormSection: FC = () => {
  const birthDateRef = useDateMask()

  const { control, setValue } = useFormContext<{
    fio: string
    city: string
    birthDate: string
    zodiacSigns: string
    gender: string
  }>()

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Профиль
          </Heading>
          <Flex gap="3">
            <Avatar
              size="9"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?&w=256&h=256&q=70&crop=focalpoint&fp-x=0.5&fp-y=0.3&fp-z=1&fit=crop"
              fallback={'U'}
            />
            <Flex direction="column" width="100%" gap="3">
              <Controller
                control={control}
                name="fio"
                render={({ field }) => (
                  <TextField.Root placeholder="ФИО" {...field} />
                )}
              />
              <Grid columns="3" gap="3">
                <Controller
                  control={control}
                  name="city"
                  render={({ field }) => (
                    <TextField.Root placeholder="Город" {...field} />
                  )}
                />
                <Flex gap="3" direction="column">
                  <Controller
                    control={control}
                    name="birthDate"
                    render={({ field }) => (
                      <TextField.Root
                        placeholder="Дата рождения"
                        {...field}
                        ref={birthDateRef}
                        // variant={true ? 'soft' : 'surface'}
                        // color={true ? 'red' : 'gray'}
                      />
                    )}
                  />
                  <Controller
                    control={control}
                    name="zodiacSigns"
                    render={({ field }) => (
                      <Select.Root
                        value={field.value}
                        onValueChange={(value) =>
                          setValue('zodiacSigns', value)
                        }
                      >
                        <Select.Trigger placeholder="Знак зодиака" />
                        <Select.Content>
                          <Select.Item value="not">Не выбран</Select.Item>
                          {zodiacSigns.map(({ value, title }) => (
                            <Select.Item key={value} value={value}>
                              {title}
                            </Select.Item>
                          ))}
                        </Select.Content>
                      </Select.Root>
                    )}
                  />
                </Flex>
                <Controller
                  control={control}
                  name="gender"
                  render={({ field }) => (
                    <Select.Root
                      value={field.value}
                      onValueChange={(value) => setValue('gender', value)}
                    >
                      <Select.Trigger placeholder="Пол" />
                      <Select.Content>
                        <Select.Item value="null">Не выбран</Select.Item>
                        <Select.Item value="men">Мужчина</Select.Item>
                        <Select.Item value="women">Женщина</Select.Item>
                      </Select.Content>
                    </Select.Root>
                  )}
                />
              </Grid>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
