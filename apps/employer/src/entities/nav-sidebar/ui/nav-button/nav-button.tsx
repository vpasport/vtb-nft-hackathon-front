import type { ButtonProps } from '@radix-ui/themes'
import type { FC, ReactNode } from 'react'

import { Button, IconButton } from '@radix-ui/themes'

interface NavButtonProps extends ButtonProps {
  icon: ReactNode
  isOpen: boolean
}

export const NavButton: FC<NavButtonProps> = ({
  isOpen,
  children,
  icon,
  ...props
}) => {
  return isOpen ? (
    <Button
      {...props}
      style={{
        justifyContent: 'flex-start',
      }}
    >
      {icon}
      {children}
    </Button>
  ) : (
    <IconButton {...props}>{icon}</IconButton>
  )
}
