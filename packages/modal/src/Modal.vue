<template>
  <modal-listener v-bind="$props">
    <modal-renderer 
      slot-scope="{ active, close }" 
      v-if="active" 
      v-bind="$props" 
      :close="close"
    >
      <slot />
    </modal-renderer>
  </modal-listener>
</template>

<script>
import ModalListener from './ModalListener.vue'
import ModalRenderer from './ModalRenderer.vue'

export default {
  name: 'Modal',
  components: {
    ModalListener,
    ModalRenderer,
  },
  props: {
    /**
     * The close button label
     */
    closeLabel: {
      type: String,
      required: true,
    },
    /**
     * The modal name
     */
    name: {
      type: String,
      required: true,
    },
    /**
     * The modal size
     */
    size: {
      type: String,
      required: true,
    },
  },
}
</script>
