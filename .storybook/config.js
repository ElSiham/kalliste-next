import { configure } from '@storybook/vue'

const req = require.context('../packages', true, /\.stories\.js$/)

configure(() => req.keys().forEach(req), module)
