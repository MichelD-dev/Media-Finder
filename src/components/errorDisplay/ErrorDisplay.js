import { useReducer } from 'react'
import { Dimmer, Segment } from 'semantic-ui-react'

const ErrorDisplay = ({ error }) => {
  const [active, toggleActive] = useReducer(val => !val, true)
  return (
    <Dimmer.Dimmable blurring dimmed={active}>
      <Dimmer inverted page active={active} onClickOutside={toggleActive}>
        <Segment padded='very' color='red'>
          <h3 style={{ color: 'red' }}><pre>{error}</pre></h3>
        </Segment>
      </Dimmer>
    </Dimmer.Dimmable>
  )
}

export default ErrorDisplay
