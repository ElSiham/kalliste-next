<template>
  <button 
    v-on="$listeners"
    :class="[ 'Radioline', { 
      'Radioline--selected': selected 
    } ]"
  >
    <div class="Radioline__Title">
      <slot name="title" />
    </div>

    <div class="Radioline__Subtitle">
      <slot name="subtitle" />
    </div>
  </button>
</template>

<script>
export default {
  name: 'Radioline',
  props: {
    selected: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="sass" scoped src="./Radioline.sass" />
