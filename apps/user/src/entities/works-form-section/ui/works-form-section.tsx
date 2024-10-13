import type { FC } from 'react'

import {
  Button,
  Card,
  Container,
  Flex,
  Grid,
  Heading,
  Separator,
  TextArea,
  TextField,
} from '@radix-ui/themes'
import { Controller, useFormContext, useWatch } from 'react-hook-form'
import { PlusIcon } from '@radix-ui/react-icons'

import { Post } from './post/ui/post'

import * as styles from './works-form-section.module.scss'

export const WorksFormSection: FC = () => {
  const { control, setValue } = useFormContext<{
    works: {
      name: string
      posts: {
        name: string
        from: string
        to: string
      }[]
      description: string
    }[]
  }>()
  const { works } = useWatch({ control })

  return (
    <Container size="3">
      <Card size="3">
        <Flex direction="column" gap="3">
          <Heading size="3" align="left">
            Места работы
          </Heading>
          <Flex gap="3" direction="column">
            {works?.map((work, idx) => (
              <>
                <Flex direction="column" gap="3">
                  <Controller
                    control={control}
                    name={`works.${idx}.name`}
                    render={({ field }) => (
                      <TextField.Root placeholder="Название" {...field} />
                    )}
                  />
                  <Flex gap="2" direction="column">
                    {work.posts?.map((_, postIdx) => (
                      <>
                        <Post workIndex={idx} postIndex={postIdx} />
                      </>
                    ))}
                    <Button
                      color="cyan"
                      variant="soft"
                      onClick={() =>
                        setValue(`works.${idx}.posts`, [
                          ...(works[idx].posts ?? []),
                          {
                            name: '',
                            from: '',
                            to: '',
                          },
                        ])
                      }
                    >
                      <PlusIcon />
                      Добавить должность
                    </Button>
                  </Flex>
                  <Controller
                    control={control}
                    name={`works.${idx}.description`}
                    render={({ field }) => (
                      <TextArea
                        placeholder="Описание..."
                        resize="none"
                        className={styles['works-section-description']}
                        {...field}
                      />
                    )}
                  />
                </Flex>
                <Separator my="3" size="4" />
              </>
            ))}
            <Grid gap="3" columns="2">
              <Button
                variant="soft"
                color="cyan"
                onClick={() => {
                  setValue('works', [
                    ...(works ?? []),
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
                  ])
                }}
              >
                <PlusIcon />
                Добавить
              </Button>
            </Grid>
          </Flex>
        </Flex>
      </Card>
    </Container>
  )
}
