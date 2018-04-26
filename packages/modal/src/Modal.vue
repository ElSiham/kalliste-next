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
    /**
     * Render the modal in place instead of using 'portal-vue'
     * @deprecated
     */
    __dangerouslyRenderInPlace: {
      type: Boolean,
      default: false,
    },
  },
  render() {
    return (
      <ModalListener
        name={this.name}
        scopedSlots={{
          default: ({ active, close }) =>
            active && (
              <ModalRenderer {...{ props: this.$props }} close={close}>
                {this.$slots.default}
              </ModalRenderer>
            ),
        }}
      />
    )
  },
}
</script>
