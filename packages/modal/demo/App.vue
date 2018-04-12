<template>
  <div>
    <modal-target />

    <div v-for="size in sizes" :key="size">
      <button @click="$modals.show(size)">Open {{ size }}</button>

      <modal :name="size" :size="size" closeLabel="Fermer">
        <div @click="expanded = !expanded">
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <br>  
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
          <div v-if="expanded">
            <br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br><br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et vestibulum dolor. Fusce 
            sagittis turpis non magna condimentum pretium. Donec pretium aliquet orci at gravida. 
            Curabitur congue et elit a lobortis. Proin finibus mauris id urna maximus congue. 
            Donec rhoncus tempus egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </modal>
    </div>
  </div>
</template>

<script>
import Modal, { ModalTarget } from '../src'

export default {
  components: {
    Modal,
    ModalTarget,
  },
  data() {
    return {
      expanded: false,
    }
  },
  computed: {
    sizes() {
      return ['small', 'medium', 'large']
    },
  },
}
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

html
  font-size: 10px
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale

body
  font-size: 1.6rem 
</style>
