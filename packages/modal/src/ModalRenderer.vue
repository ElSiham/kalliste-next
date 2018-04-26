<script>
import { Event } from '@backmarket/event'
import { SizeMe } from '@backmarket/size-me'
import { Sticky } from '@backmarket/sticky'
import Plugin from './plugin'

const sizes = ['small', 'medium', 'large']

export default {
  name: 'ModalRenderer',
  props: {
    /**
     * Close the modal
     */
    close: {
      type: Function,
      required: true,
    },
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
      validator(size) {
        return sizes.includes(size)
      },
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
  created() {
    Plugin.target.add({ name: this.name })
  },
  destroyed() {
    Plugin.target.remove({ name: this.name })
  },
  render() {
    const Container = this.__dangerouslyRenderInPlace ? 'div' : 'portal'

    return (
      <Container to="modal">
        <div class="Modal" ref="container">
          <transition appear name="Animation--Backdrop">
            <div class="Modal__Backdrop" onClick={this.close} />
          </transition>
          <transition appear name="Animation--Window">
            <Event
              type="resize"
              listener={window => window.innerHeight}
              scopedSlots={{
                default: ({ result: windowHeight }) => (
                  <SizeMe
                    scopedSlots={{
                      default: ({ height }) => (
                        <div
                          class={[
                            'Modal__Window',
                            {
                              'Modal__Window--small': this.size === 'small',
                              'Modal__Window--medium': this.size === 'medium',
                              'Modal__Window--large': this.size === 'large',
                              'Modal__Window--scrollable': height > windowHeight,
                            },
                          ]}
                        >
                          <Sticky
                            scroller={() => this.$refs.container}
                            scopedSlots={{
                              default: ({ sticky }) => (
                                <div
                                  class={[
                                    'Modal__Topbar',
                                    {
                                      'Modal__Topbar--sticky': sticky,
                                    },
                                  ]}
                                >
                                  <button class="Button--reset" onClick={this.close}>
                                    {this.closeLabel}
                                  </button>
                                </div>
                              ),
                            }}
                          />
                          <div class="Modal__Content">{this.$slots.default}</div>
                        </div>
                      ),
                    }}
                  />
                ),
              }}
            />
          </transition>
        </div>
      </Container>
    )
  },
}
</script>

<style lang="sass" src="./Modal.sass" />
