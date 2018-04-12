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
    closeLabel: ModalListener.props.closeLabel,
    name: ModalListener.props.name,
    size: ModalListener.props.size,
  },
}
</script>
