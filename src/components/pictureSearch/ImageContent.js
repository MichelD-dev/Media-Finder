import './ImageContent.css'
import { Loader } from 'semantic-ui-react'
import { useReducer } from 'react'
import useFetchImages from 'Hooks/useFetchImages'
import ErrorDisplay from 'Components/Displays/ErrorDisplay'
import NoDatasDisplay from 'Components/Displays/NoDatasDisplay'
import ImagesList from './ImagesList'

const styles = {
  dimmer: {
    marginTop: '150px',
    height: '75%',
  },
  h3: { color: '#999' },
  loader: { marginTop: '30%' },
}

const ImageContent = ({ searchTerm }) => {
  const { data, status } = useFetchImages(searchTerm)
  const [active, toggleShowedWarning] = useReducer(val => !val, true)

  const reset = () => {
    toggleShowedWarning()
  }

  if (status === 'fetching') {
    return (
      <Loader
        active
        inline='centered'
        size='large'
        content='Chargement...'
        style={styles.loader}
      />
    )
  }

  if (status === 'fail') {
    return <ErrorDisplay />
  }

  if (data.length === 0)
    return <NoDatasDisplay active={active} reset={reset} styles={styles} />

  return <ImagesList data={data} />
}

export default ImageContent
