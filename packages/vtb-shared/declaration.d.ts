declare module '*.scss' {
  const content: Record<string, string>
  export default content
}
declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly PUBLIC_URL: string
    readonly REACT_APP_YM?: string
  }
}
