---
to: packages/<%= name %>/src/<%= Name %>.vue
---
<template>
  <div>
    Hello {{ message }}
  </div>
</template>

<script>
export default {
  name: '<%= Name %>',
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

