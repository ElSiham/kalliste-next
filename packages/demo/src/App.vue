<template>
  <div id="app">
    <modal size="small" name="pouet" closeLabel="Fermer">
      Pouet
    </modal>

    <button @click="$modals.show('pouet')">Pouet</button>

    <modal-target />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { Modal, ModalTarget } from '@backmarket/modal'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Modal,
    ModalTarget,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 10px;
}

body {
  font-size: 1.6rem;
}
</style>
