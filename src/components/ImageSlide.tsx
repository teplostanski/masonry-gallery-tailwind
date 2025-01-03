import { SwiperSlide } from 'swiper/react';

interface ImageSlideProps {
  src: string;
  author: string;
  virtualIndex?: number;
}

export const ImageSlide = ({ src, author, virtualIndex }: ImageSlideProps) => {
  return (
    <SwiperSlide virtualIndex={virtualIndex}>
      <div className="h-svh flex items-center justify-center">
        <img
          src={src}
          alt={`Photo by ${author}`}
          className="w-full h-auto max-h-svh object-contain"
        />
      </div>
    </SwiperSlide>
  );
}; 