<template>
  <button 
    v-on="$listeners"
    :class="[ 'Button', {
      'Button--default': appearance === 'default',
      'Button--primary': appearance === 'primary',
      'Button--secondary': appearance === 'secondary',
    } ]"
  >
    <slot />
  </button>
</template>

<script>
const appearances = ['default', 'primary', 'secondary']

export default {
  name: 'Button',
  props: {
    appearance: {
      type: String,
      validator: value => appearances.includes(value),
    },
  },
}
</script>

<style lang="sass" scoped src="./Button.sass" />
