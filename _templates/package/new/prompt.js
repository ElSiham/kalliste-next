module.exports = {
  prompt: ({ inquirer, args: { name } }) => {
    if (name) {
      return
    }

    return inquirer.prompt({
      type: 'input',
      name: 'name',
      message: "What's the package name ?",
    })
  },
}
