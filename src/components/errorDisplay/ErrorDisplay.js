import { useReducer } from 'react'
import { Dimmer, Segment } from 'semantic-ui-react'

const ErrorDisplay = ({ error, resetErrorBoundary }) => {
  const [active, toggleActive] = useReducer(val => !val, true)

const reset = () => {
  resetErrorBoundary()
  toggleActive()
}

  return (
    <Dimmer.Dimmable blurring dimmed={active}>
      <Dimmer inverted page active={active} onClickOutside={reset}>
        <Segment padded='very' color='red'>
          <h3 style={{ color: 'red' }}><pre>{error}</pre></h3>
        </Segment>
      </Dimmer>
    </Dimmer.Dimmable>
  )
}

export default ErrorDisplay
