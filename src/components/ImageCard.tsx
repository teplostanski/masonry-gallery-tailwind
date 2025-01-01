interface ImageCardProps {
  src: string;
  author: string;
}

export const ImageCard = ({ src, author }: ImageCardProps) => {
  return (
    <img
      src={src}
      alt={`Photo by ${author}`}
      className="w-full"
    />
  );
}; 