import data from './data.json'
import { MasonryLayout } from './components/MasonryLayout'
import { ImageCard } from './components/ImageCard'
import { Header } from './components/Header'

function App() {
  const { images } = data;
  const currentYear = new Date().getFullYear();

  return (
    <div className="p-5 md:p-10">
      <Header currentYear={currentYear} />
      <MasonryLayout>
        {images.map((image, index) => (
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
