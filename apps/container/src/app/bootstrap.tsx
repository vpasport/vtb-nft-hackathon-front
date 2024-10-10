import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { Theme } from '@radix-ui/themes'

import { ContainerApp } from './app'

import './app.scss'
import './app.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 30 * 60 * 1000,
    },
  },
})

root.render(
  <QueryClientProvider client={queryClient}>
    <Theme>
      <ContainerApp />
    </Theme>
  </QueryClientProvider>,
)
