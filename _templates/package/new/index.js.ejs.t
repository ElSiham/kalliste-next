---
to: packages/<%= name %>/src/index.js
---
export { default as <%= h.inflection.camelize(name.replace('-', '_')) %> } from './<%= h.inflection.camelize(name.replace('-', '_')) %>.vue'
