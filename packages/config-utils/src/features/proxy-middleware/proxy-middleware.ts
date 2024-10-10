import { createProxyMiddleware } from 'http-proxy-middleware'

export const proxy = (app: any) => {
  app.use(
    [
      '/api',
      '/media',
      '/content',
      '/api-extended',
      '/uploaded-media',
      '/assets',
    ],
    createProxyMiddleware({
      target: process.env.REACT_APP_PROXY_PATH,
      changeOrigin: true,
      secure: false, //https://stackoverflow.com/questions/20082893/unable-to-verify-leaf-signature
    }),
  )
}
