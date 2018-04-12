<script>
import Plugin from './plugin'

const ESCAPE_KEY = 27

export default {
  name: 'ModalListener',
  props: {
    /**
     * The identifier used to know which modal to display
     */
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      active: false,
    }
  },
  mounted() {
    Plugin.event.$on('toggle', ({ active, name }) => {
      if (this.name === name) {
        this.active = active
      }
    })
  },
  methods: {
    /**
     * Closes the modal.
     * @public
     */
    close() {
      this.$modals.hide(this.name)
    },
    handleEscape({ which: key }) {
      if (key === ESCAPE_KEY) {
        this.close()
      }
    },
  },
  watch: {
    active: {
      immediate: true,
      handler(value) {
        value
          ? window.addEventListener('keydown', this.handleEscape)
          : window.removeEventListener('keydown', this.handleEscape)
      },
    },
  },
  render() {
    return this.$scopedSlots.default({
      active: this.active,
      close: this.close,
    })
  },
}
</script>
