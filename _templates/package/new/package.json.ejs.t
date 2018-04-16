---
to: packages/<%= name %>/package.json
sh: cd packages/<%= name %> && npm install
---
{
  "name": "@backmarket/<%= name %>",
  "version": "0.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "../../node_modules/.bin/rollup -c ../../rollup.config.js",
    "watch": "npm run build -- --watch"
  },
  "peerDependencies": {
    "vue": "^2.5.16"
  }
}
