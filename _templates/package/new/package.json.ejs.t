---
to: packages/<%= name %>/package.json
sh: cd packages/<%= name %> && npm install
---
{
  "name": "@backmarket/<%= name %>",
  "version": "0.0.0",
  "main": "dist/index.js",
  "scripts": {
    "build": "../../node_modules/.bin/webpack --config ../../webpack.config.js --progress --hide-modules",
    "watch": "npm run build -- --watch",
    "prepublish": "npm run build"
  },
  "peerDependencies": {
    "vue": "^2.5.16"
  },
  "publishConfig": {
    "access": "public"
  }
}
