import type { FC } from 'react'
import type { ErrorMicroMountProps } from './error-micro-mount.types'

import { Button, Flex, Text } from '@radix-ui/themes'

import { ReactComponent as Icon } from './icon.svg'

export const ErrorMicroMount: FC<ErrorMicroMountProps> = ({
  icon,
  moduleName,
  onAction,
  actionText = 'Перезагрузить приложение',
  customDescription,
  title = 'Не смогли загрузить приложение',
}) => {
  return (
    <Flex
      gap="3"
      direction="column"
      align="center"
      justify="center"
      width="100%"
      height="100%"
    >
      {icon ?? <Icon />}
      <Text align="center">{title}</Text>
      {customDescription ?? (
        <>
          <Text align="center">
            При загрузке произошла ошибка, попробуйте перезагрузить приложение
          </Text>
          {onAction && <Button onClick={onAction}>{actionText}</Button>}
        </>
      )}
    </Flex>
  )
}
