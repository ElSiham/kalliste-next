---
to: packages/<%= name %>/src/<%= h.inflection.camelize(name.replace('-', '_')) %>.vue
---
<template>
  <div>
    Hello {{ message }}
  </div>
</template>

<script>
export default {
  name: '<%= h.inflection.camelize(name.replace('-', '_')) %>',
  props: {
    /**
     * The holy message
     */
    message: {
      type: String,
      default: 'world',
    },
  },
}
</script>

