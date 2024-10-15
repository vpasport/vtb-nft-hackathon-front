import type { FC } from 'react'

import { Card, Flex, Grid, Text } from '@radix-ui/themes'

import * as styles from './achievements-card.module.scss'

export const AchievementsCard: FC = () => {
  return (
    <Card>
      <Flex direction="column" gap="3">
        <Text size="3" weight="bold">
          Достижения
        </Text>
        <Card size="1">
          <Grid columns="4" gap="2">
            {new Array(10).fill(null).map((_, idx) => (
              <Flex
                key={idx}
                justify="center"
                align="center"
                className={styles['achievements-card-achievement']}
              >
                A
              </Flex>
            ))}
          </Grid>
        </Card>
      </Flex>
    </Card>
  )
}
