import type { FC } from 'react'

import { Card, Flex, Separator, Text } from '@radix-ui/themes'
import { WorkPlace } from '@/shared/components/work-place'

export const WorkPlacesCard: FC = () => {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Text size="3" weight="bold">
          Места работы
        </Text>
        <WorkPlace
          title="Озон Технологии"
          verified
          posts={[
            {
              position: 'Стажер',
              dateFrom: '04.20',
              dateTo: '09.20',
              description:
                'В рамках проекта Лабуда была проделана масштабная работа по реализации проекта. В ходе реализации проекта были использованы современные методы и технологии, а также привлечены квалифицированные специалисты. На первом этапе проекта был проведён анализ текущей ситуации, определены основные проблемы и потребности целевой аудитории. На основе полученных данных были разработаны конкретные планы и стратегии для достижения поставленных целей.',
            },
            {
              position: 'Младший системный аналитик',
              dateFrom: '01.20',
              dateTo: '04.20',
              description:
                'В рамках проекта Лабуда была проделана масштабная работа по реализации проекта. В ходе реализации проекта были использованы современные методы и технологии, а также привлечены квалифицированные специалисты',
            },
          ]}
        />
        <Separator size="4" orientation="horizontal" />
        <WorkPlace
          title="МТС"
          verified
          posts={[
            {
              position: 'Системный аналитик',
              dateFrom: '04.20',
              dateTo: '09.20',
              description:
                'В рамках проекта Лабуда была проделана масштабная работа по реализации проекта. В ходе реализации проекта были использованы современные методы и технологии, а также привлечены квалифицированные специалисты',
            },
          ]}
        />
        <Separator size="4" orientation="horizontal" />
        <WorkPlace
          title="Wildberries"
          posts={[
            {
              position: 'Системный аналитик',
              dateFrom: '04.20',
              dateTo: '09.20',
            },
          ]}
        />
        <Separator size="4" orientation="horizontal" />
        <WorkPlace
          title="Wildberries"
          posts={[
            {
              position: 'Старший системный аналитик',
              dateFrom: '04.20',
              dateTo: '09.20',
            },
          ]}
        />
      </Flex>
    </Card>
  )
}
