# Kalliste 2.0

Welcome to Kalliste, a peaceful environment to manage reusable styles and components.

## Updating to new releases

Kalliste is divided into multiple modules, each component being its own package.

To update an existing project to use the new version of Kalliste components,
remember to read the changelogs and follow any specified migration steps.

In most cases, bumping the component version in `package.json` and running `npm install`
in this folder should be enough, but it's good to consult the changelogs for
potential breaking changes.

We'll try to keep the breaking changes minimal, so you can upgrade painlessly.

## Folder structure

As introduced above, Kalliste is structured as a monorepo, which means that every
module lives in its own subpackage.

```
kalliste/
  README.md
  node_modules/
  package.json
  packages/
    modal/
      src/
        index.js
      node_modules/
      package.json
    sticky/
      src/
        index.js
      node_modules/
      package.json
    size-me/
      src/
        index.js
      node_modules/
      package.json
```

For each component to build, **these files must exist with exact filenames**:

* packages/\*/src/package.json
* packages/\*/src/index.js

You can add, move or delete any other files.

## Available scripts

In the project directory, you can run:

### `npm run styleguide`

Runs the styleguide development server.
Open http://localhost:6060 to view it in the browser.

### `npm run generate`

Generates a new empty package.
You will be asked the package name, and the scaffolding will be automated for you.

### `npm run publish`

Publishes every updated packages to git and npm.
The changelogs will be automatically generated based on your commit messages, following
[the conventional commits convention](https://github.com/angular/angular/blob/master/CONTRIBUTING.md#commit).

Publishing is restricted to the `master` branch. Trying to publish from somewhere else
will fail and ask you to checkout.

## Installing a build dependency

Build dependencies are included inside the top level `node_modules`. This ensures they
stay synchronised between each package. You may install other build dependencies with `npm`:

```
npm install --save-dev your-awesome-tool
```

## Installing a component dependency

Components are scafolded without any dependency. In general, its better to avoid dependencies in
order to minimize the module size. You may install other component dependencues with `npm` :

```
cd packages/my-component
npm install your-awesome-dependency
```

Alternatively, you may use `lerna`:

```
lerna add your-awesome-dependency --scope="my-component"
```

This works for any dependency, not just `your-awesome-dependency`. If your component depends on
another component, you have to install it using the `lerna` way above.
