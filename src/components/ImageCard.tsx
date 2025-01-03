import { Image } from '@nextui-org/image';

interface ImageCardProps {
  src: string;
  author: string;
  onClick: () => void;
}

export const ImageCard = ({ src, author, onClick }: ImageCardProps) => {
  return (
    <div className="break-inside-avoid w-full mb-5 cursor-pointer" onClick={onClick}>
      <Image
        src={src}
        alt={`Photo by ${author}`}
        classNames={{
          wrapper: "w-full",
          img: "w-full"
        }}
        radius="none"
        shadow="none"
      />
      <p className="mt-2 text-sm text-gray-600">
        Photo <span className="font-light">by {author}</span>
      </p>
    </div>
  );
}; 