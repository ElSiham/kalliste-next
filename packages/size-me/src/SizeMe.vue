<script>
export default {
  name: 'SizeMe',
  data() {
    return {
      height: 0,
      width: 0,
    }
  },
  mounted() {
    this.setDimensions()
    window.addEventListener('resize', this.handleResize)
  },
  updated() {
    this.setDimensions()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      window.requestAnimationFrame(this.setDimensions)
    },
    setDimensions() {
      this.height = this.$el.clientHeight
      this.width = this.$el.clientWidth
    },
  },
  render() {
    return this.$scopedSlots.default({
      height: this.height,
      width: this.width,
    })
  },
}
</script>

<docs>
```vue
<size-me>
  <div slot-scope="{ height, width }">
    My width is {{ width }}, and my height is {{ height }}.
  </div>
</size-me>
```
</docs>
