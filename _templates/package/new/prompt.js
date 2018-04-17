const inflection = require('inflection')

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt({
        type: 'input',
        name: 'name',
        message: "What's the package name ?",
        validate: value => value.length !== 0,
      })
      .then(params => ({
        ...params,
        formatted: inflection.camelize(params.name.replace('-', '_')),
      }))
  },
}
