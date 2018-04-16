<script>
export default {
  name: 'Sticky',
  props: {
    /**
     * A function resolving to the parent element.
     * For exemple, `() => window.document` will compare both the parent and the scroller positions.
     */
    container: {
      type: Function,
      default() {
        return this.$el.parentElement
      },
    },
    /**
     * A function resolving to the scrolling element.
     * For exemple, `() => document.body` will attach the scroll event listener to the document body.
     */
    scroller: {
      type: Function,
      default: () => document.body,
    },
  },
  data() {
    return {
      height: 0,
      containerTop: 0,
      scrollerTop: 0,
    }
  },
  mounted() {
    this.height = this.$el.getBoundingClientRect().height
    this.scrollerTop = this.scroller().getBoundingClientRect().top

    this.scroller().addEventListener('scroll', this.handleScroll)
  },
  beforeDestroyed() {
    this.scroller().removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      window.requestAnimationFrame(() => {
        this.containerTop = this.container().getBoundingClientRect().top
      })
    },
  },
  computed: {
    sticky() {
      return this.containerTop < this.scrollerTop
    },
  },
  render() {
    return this.$scopedSlots.default({
      sticky: this.sticky,
    })
  },
}
</script>
