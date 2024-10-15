import type { FC } from 'react'
import type { WorkPlaceProps } from '../model/interfaces/work-place.types'
import { Flex, Text } from '@radix-ui/themes'
import { CheckCircledIcon } from '@radix-ui/react-icons'
import { OverflowingText } from '../../overflowing-text'

export const WorkPlace: FC<WorkPlaceProps> = ({ title, verified, posts }) => {
  return (
    <Flex direction="column" gap="2">
      <Flex direction="row" gap="1">
        {verified && <CheckCircledIcon />}
        <Text size="2" weight="bold">
          {title}
        </Text>
      </Flex>
      {posts?.map(({ dateFrom, dateTo, description, position }) => (
        <Flex key={dateFrom} direction="column" gap="2">
          <Flex direction="row" gap="1">
            <Text size="1" weight="bold">
              {position}
            </Text>
            <Text size="1">
              {dateFrom} – {dateTo}
            </Text>
            <Text size="1" weight="bold">
              (тут будет сумма)
            </Text>
          </Flex>
          {description && (
            <OverflowingText rows="5" size="1">
              {description}
            </OverflowingText>
          )}
        </Flex>
      ))}
    </Flex>
  )
}
