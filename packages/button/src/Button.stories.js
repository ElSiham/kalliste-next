import { storiesOf } from '@storybook/vue'
import { Button } from '.'

const styles = {
  width: '50vw',
  height: '30vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

storiesOf('Button', module).add('appearances', () => ({
  render(h) {
    return (
      <div style={styles}>
        <Button>Click me!</Button>
        <Button appearance="default">Click me!</Button>
        <Button appearance="primary">Click me!</Button>
        <Button appearance="secondary">Click me!</Button>
      </div>
    )
  },
}))
