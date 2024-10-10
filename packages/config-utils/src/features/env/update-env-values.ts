const fs = require('fs')
const os = require('os')

interface EVNValue {
  key: string
  value: string | number
}

export const updateEnvValue = (values: EVNValue[], envPath: string) => {
  // read file from hdd & split if from a linebreak to a array
  const ENV_VARS = ((fs.readFileSync(envPath, 'utf8') as string) ?? '')
    .split(os.EOL)
    .filter((el) => !!el.trim())

  values.forEach((variable) => {
    // find the env we want based on the key

    const target = ENV_VARS.findIndex((el) =>
      el.match(new RegExp('^' + variable.key + '=')),
    )

    const valString = `${variable.key}=${variable.value}`
    if (target >= 0) {
      ENV_VARS[target] = valString
    } else {
      ENV_VARS.push(valString)
    }
    // replace the key/value with the new value
    // ENV_VARS.splice(target, 1, `${variable.key}=${variable.value}`)
  })

  // write everything back to the file system
  fs.writeFileSync(envPath, ENV_VARS.join(os.EOL))
}
