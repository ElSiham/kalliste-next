import { storiesOf } from '@storybook/vue'
import { Divider } from '.'

const styles = {
  width: '50vw',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

storiesOf('Divider', module).add('default', () => ({
  render(h) {
    return (
      <div style={styles}>
        <div>
          In id sem sem. Phasellus non euismod nunc, et aliquet nibh. Donec suscipit diam vel condimentum ullamcorper.
          Maecenas magna arcu, laoreet sit amet ipsum non, vestibulum venenatis purus. Quisque fermentum nulla eu lectus
          dictum pulvinar. Praesent euismod urna ut elit iaculis, sed dignissim orci malesuada. Mauris quis gravida ex,
          volutpat imperdiet massa. Vestibulum vitae luctus ipsum. Proin pulvinar dui eu sapien volutpat, non malesuada
          arcu vestibulum. Phasellus cursus at nisl vel semper. Nullam aliquet sed ex at pharetra. Phasellus sed
          molestie sem, quis vestibulum metus. Sed vitae tortor tincidunt, consectetur est ac, porta leo. Suspendisse
          pretium aliquet enim, sed venenatis tellus finibus sed. Fusce porttitor felis eget pretium consectetur.
        </div>
        <Divider />
        <div>
          In id sem sem. Phasellus non euismod nunc, et aliquet nibh. Donec suscipit diam vel condimentum ullamcorper.
          Maecenas magna arcu, laoreet sit amet ipsum non, vestibulum venenatis purus. Quisque fermentum nulla eu lectus
          dictum pulvinar. Praesent euismod urna ut elit iaculis, sed dignissim orci malesuada. Mauris quis gravida ex,
          volutpat imperdiet massa. Vestibulum vitae luctus ipsum. Proin pulvinar dui eu sapien volutpat, non malesuada
          arcu vestibulum. Phasellus cursus at nisl vel semper. Nullam aliquet sed ex at pharetra. Phasellus sed
          molestie sem, quis vestibulum metus. Sed vitae tortor tincidunt, consectetur est ac, porta leo. Suspendisse
          pretium aliquet enim, sed venenatis tellus finibus sed. Fusce porttitor felis eget pretium consectetur.
        </div>
      </div>
    )
  },
}))
