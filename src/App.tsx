import data from './data.json'

function App() {
  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        {data.images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={`Photo by ${image.author}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  )
}

export default App
