import { FC, lazy, ReactNode, useEffect, useState } from 'react'
import { loadComponent } from './lazy-component'

declare global {
  interface Window {
    [s: string]: any
  }
}

interface UseDynamicScriptParams {
  url: string
  scope: string
  module: string
  removeOnUnmount?: boolean
  errorNode?: ReactNode
  loadingNode?: ReactNode
  verified: boolean
}

const microservices: Record<string, FC> = {}

export const useDynamicScript = ({
  url,
  scope,
  module,
  removeOnUnmount,
  errorNode,
  loadingNode,
  verified,
}: UseDynamicScriptParams) => {
  const [Component, setComponent] = useState<FC>(() => () => <>{loadingNode}</>)

  useEffect(() => {
    if (!verified) {
      setComponent(() => () => <>{errorNode}</>)
      return () => {}
    }

    if (!url || !scope) {
      return () => {}
    }

    if (!document.head.querySelector(`script[src="${url}"]`)) {
      const script = document.createElement('script')

      script.src = url
      script.type = 'text/javascript'
      script.async = true

      setComponent(() => () => <>{loadingNode}</>)

      script.onload = async () => {
        console.debug(`Dynamic Script Loaded: ${url}`)

        microservices[scope] = await lazy(() => {
          return loadComponent(scope, module).then((module) => {
            return { default: module[scope] }
          })
        })
        setComponent(microservices[scope])
      }

      script.onerror = (): void => {
        console.error(`Dynamic Script Error: ${url}`)
        setComponent(() => () => <>{errorNode}</>)
        document.head.removeChild(script)
      }

      document.head.appendChild(script)

      if (removeOnUnmount) {
        return () => {
          console.debug(`Dynamic Script Removed: ${url}`)
          document.head.removeChild(script)
          delete microservices[scope]
          setComponent(() => () => <>{errorNode}</>)
        }
      } else {
        return () => {}
      }
    } else if (microservices[scope]) {
      setComponent(microservices[scope])

      return () => {}
    } else {
      setComponent(() => () => <>{errorNode}</>)
      return () => {}
    }
  }, [url, scope, module])

  return {
    Component,
  }
}
