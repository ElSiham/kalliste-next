import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import { Modal, ModalTarget, Plugin } from '.'

Vue.use(Plugin)

const styles = {
  width: '50vw',
  minHeight: '30vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

const placeholder = h => (
  <div>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas consequat neque et neque volutpat imperdiet. Fusce
    sed luctus dolor. Maecenas fermentum quam sem, eu vehicula lacus venenatis et. Sed varius urna vitae sapien
    suscipit, eget dignissim dui posuere. Donec egestas, augue nec blandit condimentum, lectus justo facilisis lorem, et
    congue neque mi vitae tellus. Nulla in dolor eget nibh porta interdum vitae in nisi. Proin posuere euismod mauris.
    Donec et dolor et sem suscipit auctor. Nunc ornare, nulla id cursus viverra, neque nunc ultrices erat, quis dictum
    dui erat quis justo. Praesent et ultrices nibh. Donec lacus ante, blandit vel sapien sit amet, tempor porta enim.
    Integer pharetra imperdiet diam, eget feugiat sapien placerat eu. Phasellus placerat ex ac mi ultrices, eget aliquam
    mauris interdum. Aenean dui tortor, egestas hendrerit ullamcorper semper, congue aliquet odio. Proin ullamcorper
    vulputate purus elementum fermentum.
  </div>
)

storiesOf('Modal', module)
  .add('simple', () => ({
    render(h) {
      return (
        <div style={styles}>
          <button onClick={() => this.$modals.show('first')}>Show modal</button>

          <Modal name="first" size="small" closeLabel="Close">
            Hello from the modal
          </Modal>

          {placeholder(h)}

          <ModalTarget />
        </div>
      )
    },
  }))
  .add('scrollable', () => ({
    render(h) {
      return (
        <div style={styles}>
          <button onClick={() => this.$modals.show('first')}>Show modal</button>

          <Modal name="first" size="small" closeLabel="Close">
            {placeholder(h)}
            {placeholder(h)}
            {placeholder(h)}
            {placeholder(h)}
          </Modal>

          {placeholder(h)}

          <ModalTarget />
        </div>
      )
    },
  }))
  .add('dangerously render in place', () => ({
    render(h) {
      return (
        <div style={styles}>
          <button onClick={() => this.$modals.show('first')}>Show modal</button>

          <Modal name="first" size="small" closeLabel="Close" __dangerouslyRenderInPlace>
            {placeholder(h)}
          </Modal>

          {placeholder(h)}

          <ModalTarget />
        </div>
      )
    },
  }))
