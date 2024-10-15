import type { FC } from 'react'

import { Card, Flex, Text } from '@radix-ui/themes'
import { OverflowingText } from '@/shared/components/overflowing-text'

export const UserBioCard: FC = () => {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Text size="3" weight="bold">
          О себе
        </Text>
        <OverflowingText rows="5" size="1">
          Обладаю необходимыми навыками и опытом для успешной работы в качестве
          системного аналитика. Мои профессиональные навыки включают: опыт
          работы с методологиями разработки ПО Waterfall и Agile, знание нотаций
          моделирования UML и BPMN, умение работать с инструментами анализа и
          проектирования Visio и Enterprise Architect, навыки разработки
          технической документации, понимание принципов работы баз данных и опыт
          работы с SQL, а также владение английским языком на уровне
          Intermediate. Кроме того, я обладаю такими личными качествами, как
          ответственность, коммуникабельность и умение работать в команде. Буду
          рад обсудить детали моей кандидатуры и ответить на любые вопросы.
        </OverflowingText>
      </Flex>
    </Card>
  )
}
