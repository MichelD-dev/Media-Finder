import { Dimmer, Segment } from 'semantic-ui-react'

const NoDatasDisplay = ({ active, reset, styles }) => {
  return (
    <Dimmer.Dimmable blurring dimmed={active}>
      <Dimmer
        inverted
        page
        active={active}
        onClickOutside={reset}
        style={styles.dimmer}
      >
        <Segment padded='very'>
          <h3 style={styles.h3}>Pas d'images</h3>
        </Segment>
      </Dimmer>
    </Dimmer.Dimmable>
  )
}

export default NoDatasDisplay
