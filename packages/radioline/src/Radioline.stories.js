import { storiesOf } from '@storybook/vue'
import { Radioline, RadiolineGroup } from '.'

const styles = {
  width: '50vw',
  height: '30vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
}

storiesOf('Radioline', module)
  .add('simple', () => ({
    data() {
      return {
        selected: [2, 3],
      }
    },
    methods: {
      toggle(index) {
        if (this.selected.includes(index)) {
          this.selected = this.selected.filter(i => i !== index)
        } else {
          this.selected.push(index)
        }
      },
    },
    render(h) {
      return (
        <div style={styles}>
          <Radioline selected={this.selected.includes(0)} onClick={() => this.toggle(0)}>
            <template slot="title">Non</template>
          </Radioline>
          <Radioline selected={this.selected.includes(1)} onClick={() => this.toggle(1)}>
            <template slot="title">12 mois</template>
            <template slot="subtitle">3,99€/mois</template>
          </Radioline>
          <Radioline selected={this.selected.includes(2)} onClick={() => this.toggle(2)}>
            <template slot="title">Non</template>
          </Radioline>
          <Radioline selected={this.selected.includes(3)} onClick={() => this.toggle(3)}>
            <template slot="title">12 mois</template>
            <template slot="subtitle">3,99€/mois</template>
          </Radioline>
        </div>
      )
    },
  }))
  .add('grouped', () => ({
    data() {
      return {
        selected: 0,
      }
    },
    render(h) {
      return (
        <div style={styles}>
          <RadiolineGroup>
            <Radioline selected={this.selected === 0} onClick={() => (this.selected = 0)}>
              <template slot="title">6 mois</template>
              <template slot="subtitle">offerts et inclus</template>
            </Radioline>
            <Radioline selected={this.selected === 1} onClick={() => (this.selected = 1)}>
              <template slot="title">12 mois</template>
              <template slot="subtitle">3,99€/mois</template>
            </Radioline>
            <Radioline selected={this.selected === 2} onClick={() => (this.selected = 2)}>
              <template slot="title">18 mois</template>
              <template slot="subtitle">3,99€/mois</template>
            </Radioline>
            <Radioline selected={this.selected === 3} onClick={() => (this.selected = 3)}>
              <template slot="title">24 mois</template>
              <template slot="subtitle">3,99€/mois</template>
            </Radioline>
          </RadiolineGroup>
        </div>
      )
    },
  }))
