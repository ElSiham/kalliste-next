module.exports = [
  {
    type: 'input',
    name: 'name',
    message: "What's the package name ?",
    validate: value => value.length !== 0,
  },
]
