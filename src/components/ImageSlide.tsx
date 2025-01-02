import { SwiperSlide } from 'swiper/react';

interface ImageSlideProps {
  src: string;
  author: string;
  virtualIndex?: number;
}

export const ImageSlide = ({ src, author, virtualIndex }: ImageSlideProps) => {
  return (
    <SwiperSlide virtualIndex={virtualIndex}>
      <div className="h-full flex items-center justify-center">
        <img
          src={src}
          alt={`Photo by ${author}`}
          className="w-full h-auto max-h-screen object-contain"
        />
      </div>
    </SwiperSlide>
  );
}; 