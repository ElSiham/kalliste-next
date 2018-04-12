<template>
  <portal :to="name">
    <div class="Modal" ref="container">
      <div class="Modal__Backdrop" @click="close" />
      <event on="resize" :listener="window => window.innerHeight">
        <size-me slot-scope="{ result: windowHeight }">
          <div 
            slot-scope="{ height }"
            :class="[ 'Modal__Window', {
              'Modal__Window--small': size === 'small',
              'Modal__Window--medium': size === 'medium',
              'Modal__Window--large': size === 'large',
              'Modal__Window--scrollable': height > windowHeight,
            } ]"
          >
            <sticky :scroller="() => $refs.container">
              <div 
                slot-scope="{ sticky }" 
                :class="[ 'Modal__Topbar', { 
                  'Modal__Topbar--sticky': sticky 
                } ]"
              >
                <button class="Button--reset" @click="close">
                  {{ closeLabel }}
                </button>
              </div>
            </sticky>
            <div class="Modal__Content">
              <slot />
            </div>
          </div>
        </size-me>
      </event>
    </div>
  </portal>
</template>

<script>
import { Portal } from 'portal-vue'
import Event from './Event'
import SizeMe from './SizeMe'
import Sticky from './Sticky'
import Plugin from './plugin'

const sizes = ['small', 'medium', 'large']

export default {
  name: 'ModalRenderer',
  components: {
    Event,
    Portal,
    SizeMe,
    Sticky,
  },
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
  },
  created() {
    Plugin.target.add({ name: this.name })
  },
  destroyed() {
    Plugin.target.remove({ name: this.name })
  },
}
</script>

<style lang="sass" scoped src="./Modal.sass" />
