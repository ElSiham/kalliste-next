---
to: packages/<%= name %>/src/<%= formatted %>.vue
---
<template>
  <div>
    Hello {{ message }}
  </div>
</template>

<script>
export default {
  name: '<%= formatted %>',
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

