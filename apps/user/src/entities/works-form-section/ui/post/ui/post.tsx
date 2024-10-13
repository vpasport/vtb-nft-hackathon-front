import type { FC } from 'react'
import type { PostProps } from '../model/interfaces/post.types'

import { Flex, TextField } from '@radix-ui/themes'
import { Controller, useFormContext } from 'react-hook-form'

import * as styles from './post.module.scss'
import { useDateMask } from '@/shared/hooks/date-mask'

export const Post: FC<PostProps> = ({ postIndex, workIndex }) => {
  const dateFromRef = useDateMask()
  const dateToRef = useDateMask()

  const { control } = useFormContext<{
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

  return (
    <Flex gap="2" direction="row" width="100%">
      <Controller
        control={control}
        name={`works.${workIndex}.posts.${postIndex}.name`}
        render={({ field }) => (
          <TextField.Root
            placeholder="Должность"
            {...field}
            className={styles['works-section-post-name']}
          />
        )}
      />
      <Controller
        control={control}
        name={`works.${workIndex}.posts.${postIndex}.from`}
        render={({ field }) => (
          <TextField.Root
            placeholder="Дата с"
            {...field}
            ref={dateFromRef}
            className={styles['works-section-post-date']}
          />
        )}
      />
      <Controller
        control={control}
        name={`works.${workIndex}.posts.${postIndex}.to`}
        render={({ field }) => (
          <TextField.Root
            placeholder="Дата до"
            {...field}
            ref={dateToRef}
            className={styles['works-section-post-date']}
          />
        )}
      />
    </Flex>
  )
}
