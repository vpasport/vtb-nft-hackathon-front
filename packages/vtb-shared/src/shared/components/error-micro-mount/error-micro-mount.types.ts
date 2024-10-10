import type { ReactNode, MouseEventHandler } from 'react'

export interface ErrorMicroMountProps {
  moduleName: string
  onAction?: MouseEventHandler<HTMLButtonElement>
  actionText?: string
  icon?: ReactNode
  customDescription?: ReactNode
  title?: string
}
