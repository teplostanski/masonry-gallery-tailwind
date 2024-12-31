import data from './data.json'
import { MasonryLayout } from './components/MasonryLayout'
import { ImageCard } from './components/ImageCard'

function App() {
  return (
    <div className="p-5 md:p-10">
      <MasonryLayout>
        {data.images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            author={image.author}
          />
        ))}
      </MasonryLayout>
    </div>
  )
}

export default App
