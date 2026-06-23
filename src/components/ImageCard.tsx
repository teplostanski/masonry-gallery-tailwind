interface ImageCardProps {
  src: string;
  author: string;
}

export const ImageCard = ({ src, author }: ImageCardProps) => {
  return (
    <div className="break-inside-avoid w-full mb-5">
      <img
        src={`${import.meta.env.VITE_BASE_URL}${src}`}
        alt={`Photo by ${author}`}
        className="w-full h-auto block"
      />
      <p className="mt-2 text-sm text-gray-600">
        Photo <span className="font-light">by {author}</span>
      </p>
    </div>
  );
};
