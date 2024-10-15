import type { FC } from 'react'

import { Avatar, Badge, Card, Flex, Text } from '@radix-ui/themes'
import { Icon } from '@iconify/react'

export const UserInfoCard: FC = () => {
  return (
    <Card>
      <Flex width="100%" gap="3" direction="column">
        <Avatar
          size="9"
          src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
          fallback="T"
        />
        <Flex direction="column" gap="1">
          <Flex direction="row" gap="2">
            <Text size="3" weight="bold">
              Антуанетта Джульетта
            </Text>
            <Icon icon="mdi:zodiac-aries" />
          </Flex>
          <Text size="2" weight="bold">
            Старший системный аналитик, 34 года опыта
          </Text>
          <Text size="2">29 лет, Москва</Text>
        </Flex>
        <Flex direction="column" gap="1">
          <Text size="3" weight="bold">
            Контакты
          </Text>
          <Text size="2">+7 (999) 123-45-67</Text>
          <Text size="2">antuanetta@gmail.com</Text>
        </Flex>
        <Flex direction="row" gap="2" wrap="wrap">
          <Badge variant="solid" color="grass" radius="large" size="3">
            Нотации
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            Python
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            GIT
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            Дотации
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            Дотации
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            SQL
          </Badge>
          <Badge variant="solid" color="grass" radius="large" size="3">
            Системы
          </Badge>
        </Flex>
      </Flex>
    </Card>
  )
}
