import type { FC } from 'react'

import { useState } from 'react'
import { Card, Flex, Separator } from '@radix-ui/themes'
import {
  ExitIcon,
  InfoCircledIcon,
  ListBulletIcon,
  PinLeftIcon,
  PinRightIcon,
} from '@radix-ui/react-icons'
import {
  EMPLOYER_ORGANIZATION_PATH_LINK,
  EMPLOYER_SEARCH_PATH_LINK,
} from 'vtb-shared'
import { useLocation, useNavigate } from 'react-router-dom'

import { NavButton } from './nav-button'

import * as styles from './nav-sidebar.module.scss'

export const NavSidebar: FC = () => {
  const { pathname } = useLocation()
  const navigation = useNavigate()

  const [isOpen, setOpen] = useState(true)

  return (
    <Flex
      width={isOpen ? '260px' : '88px'}
      p="3"
      className={styles['nav-sidebar-wrapper']}
    >
      <Card size="3" className={styles['nav-sidebar']}>
        <Flex direction="column" justify="between" height="100%" width="100%">
          <Flex direction="column" width="100%" gap="2">
            <NavButton
              icon={<InfoCircledIcon />}
              isOpen={isOpen}
              variant={
                new RegExp(EMPLOYER_ORGANIZATION_PATH_LINK).test(pathname)
                  ? 'solid'
                  : 'surface'
              }
              onClick={() => navigation(EMPLOYER_ORGANIZATION_PATH_LINK)}
            >
              Компания
            </NavButton>
            <NavButton
              icon={<ListBulletIcon />}
              isOpen={isOpen}
              variant={
                new RegExp(EMPLOYER_SEARCH_PATH_LINK).test(pathname)
                  ? 'solid'
                  : 'surface'
              }
              onClick={() => navigation(EMPLOYER_SEARCH_PATH_LINK)}
            >
              Поиск
            </NavButton>
          </Flex>
          <Flex direction="column" width="100%" gap="2">
            <NavButton
              icon={isOpen ? <PinLeftIcon /> : <PinRightIcon />}
              isOpen={isOpen}
              variant="soft"
              color="cyan"
              onClick={() => setOpen((prev) => !prev)}
              data-active="true"
            >
              Свернуть
            </NavButton>
            <Separator orientation="horizontal" size="4" />
            <NavButton
              icon={<ExitIcon />}
              isOpen={isOpen}
              color="red"
              variant="surface"
            >
              Выйти
            </NavButton>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}
