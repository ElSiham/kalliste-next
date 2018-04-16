<template>
  <div>
    <portal-target
      v-for="modal in modals"
      :key="modal"
      :name="modal"
    />
  </div>
</template>

<script>
import Plugin from './plugin'

export default {
  name: 'ModalTarget',
  data() {
    return {
      modals: [],
    }
  },
  created() {
    Plugin.__setTarget(this)
  },
  methods: {
    /**
     * Add the given modal name to the list.
     *
     * @param {String} name
     * @public
     */
    add({ name }) {
      this.modals.push(name)
    },
    /**
     * Remove the given modal name from the list.
     *
     * @param {String} name
     * @public
     */
    remove({ name }) {
      this.modals = this.modals.filter(value => value !== name)
    },
  },
}
</script>
