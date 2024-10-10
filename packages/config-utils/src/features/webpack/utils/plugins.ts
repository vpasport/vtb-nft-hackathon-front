import { getHTMLTemplateConfig } from '@/features/html-template-descriptions'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlTemplateConfig = { ...getHTMLTemplateConfig().main }

export const getHtmlWebpackPluginConfig = (
  template: string,
  options: { filename?: string; inject: boolean },
) => {
  return new HtmlWebpackPlugin({
    template,
    filename: options.filename ?? template,
    inject: options.inject,
    ...htmlTemplateConfig,
    REACT_APP_YM: process.env.REACT_APP_YM,
  })
}
