import { Component, ErrorInfo, ReactNode } from 'react'

import { Text, Flex, Code } from '@radix-ui/themes'

import { ErrorMicroMount } from '@/shared/components/error-micro-mount'

interface ErrorBoundaryProps {
  children: ReactNode
  errorMessage?: string
  moduleName: string
  isErrorStackShow?: boolean
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public state: ErrorBoundaryState = {
    hasError: false,
    error: null,
  }

  public static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true, error }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.errorMessage || (
          <ErrorMicroMount
            moduleName={this.props.moduleName}
            customDescription={
              <Flex direction="column" gap="8px">
                <Text>
                  При загрузке произошла ошибка, попробуйте перезагрузить
                  приложение
                </Text>
                {this.props.isErrorStackShow && (
                  <Code>{this.state.error?.stack}</Code>
                )}
              </Flex>
            }
          />
        )
      )
    }

    return this.props.children
  }
}
