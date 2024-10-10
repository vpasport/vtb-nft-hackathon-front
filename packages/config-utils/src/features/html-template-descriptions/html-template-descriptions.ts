import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { parse } from 'yaml'

export const getHTMLTemplateConfig = () => {
  return parse(
    readFileSync(
      join(__dirname, '../../../../../html-template-config.yml'),
      'utf-8',
    ),
  )
}
