<script>
export default {
  name: 'Event',
  props: {
    /**
     * The event type.
     * Can be 'scroll', 'resize', 'click'…
     */
    type: {
      type: String,
      required: true,
    },
    /**
     * A function resolving to the event target.
     * For exemple, `() => window.document` will attach the listener to the document object.-
     */
    target: {
      type: Function,
      default: () => window,
    },
    /**
     * The listener to attach to the target.
     * It will be called once when the componenent is mounted. Then every time the tracked
     * event is fired.
     */
    listener: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      result: this.listener(this.target()),
    }
  },
  mounted() {
    this.target().addEventListener(this.type, this.handleEvent)
  },
  methods: {
    handleEvent() {
      window.requestAnimationFrame(() => {
        this.result = this.listener(this.target())
      })
    },
  },
  beforeDestroy() {
    this.target().removeEventListener(this.type, this.handleEvent)
  },
  render() {
    return this.$scopedSlots.default({
      result: this.result,
    })
  },
}
</script>

<docs>
```vue
<event type="resize" :listener="window => window.innerHeight">
  <div slot-scope="{ result }">
    The window height is {{ result }}.
  </div>
</event>
```
</docs>
