const Plugin = {
  install(Vue) {
    Plugin.target = null
    Plugin.event = new Vue()

    Plugin.__setTarget = Target => {
      Plugin.target = Target
    }

    Vue.prototype.$modals = {
      show: name => Plugin.event.$emit('toggle', { name, active: true }),
      hide: name => Plugin.event.$emit('toggle', { name, active: false }),
    }
  },
}

export default Plugin
