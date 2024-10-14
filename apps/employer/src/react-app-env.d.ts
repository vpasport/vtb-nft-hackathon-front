/// <reference types="react-scripts" />
/// <reference types="redux-persist" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly REACT_APP_INFURA_API_KEY?: string
  }
}
