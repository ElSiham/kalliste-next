---
to: packages/<%= name %>/src/index.js
---
export { default } from './<%= h.inflection.camelize(name.replace('-', '_')) %>.vue'
