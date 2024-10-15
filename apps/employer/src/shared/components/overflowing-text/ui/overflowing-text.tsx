import type { FC } from 'react'

import { useEffect, useRef, useState } from 'react'
import { Button, Flex, Text } from '@radix-ui/themes'
import { OverflowingTextProps } from '../model/interfaces/overflowing-text.type'

import * as styles from './overflowing-text.module.scss'
import clsx from 'clsx'

export const OverflowingText: FC<OverflowingTextProps> = ({
  rows = '5',
  className,
  children,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null)

  const [isOverflowing, setOverflowing] = useState(false)
  const [isFull, setFull] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setOverflowing(ref.current.scrollHeight > ref.current.clientHeight)
    }
  }, [ref])

  return (
    <Flex direction="column" gap="1" align="start">
      <Text
        ref={ref}
        className={clsx(
          !isFull && styles['overflowing-text'],
          !isFull && styles[`overflowing-text_row-${rows}`],
          className,
        )}
        {...props}
      >
        {children}
      </Text>
      {isOverflowing && (
        <Button
          variant="ghost"
          size="1"
          onClick={() => setFull((prev) => !prev)}
        >
          {isFull ? 'Скрыть' : 'Подробнее'}
        </Button>
      )}
    </Flex>
  )
}
