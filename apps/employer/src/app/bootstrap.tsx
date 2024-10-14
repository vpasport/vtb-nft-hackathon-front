import ReactDOM from 'react-dom/client'

import { QueryClient, QueryClientProvider } from 'react-query'
import { MetaMaskUIProvider } from '@metamask/sdk-react-ui'
import { ThemeContextProvider } from 'vtb-shared'

import { UserApp } from './app'

import './bootstrap.scss'
import { BrowserRouter } from 'react-router-dom'

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
    <ThemeContextProvider>
      <BrowserRouter>
        <UserApp />
      </BrowserRouter>
    </ThemeContextProvider>
  </QueryClientProvider>,
)
