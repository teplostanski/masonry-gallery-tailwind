import React from 'react';

interface ImageCardProps {
  src: string;
  author: string;
}

export const ImageCard = ({ src, author }: ImageCardProps) => {
  const [isLoaded, setIsLoaded] = React.useState(false);

  return (
    <div className="group break-inside-avoid w-full mb-5">
      <img
        src={src}
        alt={`Photo by ${author}`}
        className={`w-full transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      />
      <p className="mt-2 text-sm text-gray-600">
        Photo <span className="font-light">by {author}</span>
      </p>
    </div>
  );
}; 