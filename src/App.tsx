import { useState } from 'react';
import data from './data.json'
import { MasonryLayout } from './components/MasonryLayout'
import { ImageCard } from './components/ImageCard'
import { Header } from './components/Header'
import ImageModal from './components/ImageModal'

function App() {
  const { images } = data;
  const currentYear = new Date().getFullYear();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  return (
    <div className="p-5 md:p-10">
      <Header currentYear={currentYear} />
      <MasonryLayout>
        {images.map((image, index) => (
          <ImageCard
            key={index}
            src={image.src}
            author={image.author}
            onClick={() => setSelectedImageIndex(index)}
          />
        ))}
      </MasonryLayout>
      <ImageModal
        images={images}
        initialSlide={selectedImageIndex || 0}
        isOpen={selectedImageIndex !== null}
        onClose={() => setSelectedImageIndex(null)}
      />
    </div>
  )
}

export default App
