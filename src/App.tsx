import { images } from './data'
import { Masonry } from './components/Masonry'
import { ImageCard } from './components/ImageCard'
import { Header } from './components/Header'

function App() {
  return (
    <div className="p-5 min-[768px]:p-10">
      <Header />
      <Masonry>
        {images.map((image) => (
          <ImageCard
            key={image.id}
            id={image.id}
            src={image.src}
            author={image.author}
            width={image.width}
            height={image.height}
            priority={true}
          />
        ))}
      </Masonry>
    </div>
  )
}

export default App
