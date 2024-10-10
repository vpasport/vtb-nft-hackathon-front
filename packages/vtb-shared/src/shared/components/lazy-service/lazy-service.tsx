import { Microservice } from './lazy-service.types'

import { ReactNode, Suspense } from 'react'

import { ErrorMicroMount } from '@/shared/components/error-micro-mount'

import { useDynamicScript } from './use-dynamic-script'
import { ErrorBoundary } from './error-boundary'

interface ILazyServiceProps<T = Record<string, unknown>> {
  microservice: Microservice<T>
  loadingMessage?: ReactNode
  errorMessage?: ReactNode
  removeOnUnmount?: boolean
  verified?: boolean
}

export function LazyService<T = Record<string, unknown>>({
  microservice,
  loadingMessage,
  errorMessage,
  removeOnUnmount = false,
  verified = true,
}: ILazyServiceProps<T>): JSX.Element {
  const errorNode = errorMessage || (
    <ErrorMicroMount moduleName={microservice.module} />
  )

  const loadingNode = loadingMessage || (
    <span>Loading dynamic script: {microservice.url}</span>
  )

  const { Component } = useDynamicScript({
    ...microservice,
    removeOnUnmount,
    errorNode,
    loadingNode,
    verified,
  })

  return (
    <ErrorBoundary moduleName={microservice.module} isErrorStackShow={false}>
      <Suspense fallback={loadingNode}>
        <Component {...(microservice.props || {})} />
      </Suspense>
    </ErrorBoundary>
  )
}
