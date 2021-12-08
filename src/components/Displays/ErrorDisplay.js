import { useReducer } from 'react'
import { Dimmer, Segment } from 'semantic-ui-react'

const styles = {
  dimmer: { marginTop: '150px', height: '75%' },
  segment: { textAlign: 'center' },
  h3: { color: 'red' },
}

const ErrorDisplay = ({ error, resetErrorBoundary }) => {
  const [active, toggleShowedErrorDisplay] = useReducer(val => !val, true)

  const reset = () => {
    resetErrorBoundary()
    toggleShowedErrorDisplay()
  }

  return (
    <Dimmer.Dimmable blurring dimmed={active}>
      <Dimmer
        inverted
        page
        active={active}
        onClickOutside={reset}
        style={styles.dimmer}
      >
        <Segment padded='very' color='red' style={styles.segment}>
          <h3 style={styles.h3}>
            <pre>{error}</pre>
          </h3>
        </Segment>
      </Dimmer>
    </Dimmer.Dimmable>
  )
}

export default ErrorDisplay
