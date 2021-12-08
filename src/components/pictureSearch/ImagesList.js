import ImageCard from './ImageCard'

const ImagesList = ({ data }) => {
  return (
    <div className='image-list'>
      {data &&
        data.map(image => {
          return <ImageCard key={image.id} image={image} />
        })}
    </div>
  )
}

export default ImagesList
