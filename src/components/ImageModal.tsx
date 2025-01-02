import { Swiper, SwiperSlide } from 'swiper/react';
import { useEffect, useState, useRef } from 'react';
import { Modal, ModalContent, Button } from "@nextui-org/react";
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';

interface ImageModalProps {
  images: { src: string; author: string }[];
  initialSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ images, initialSlide, isOpen, onClose }: ImageModalProps) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size="full"
      backdrop="blur"
      classNames={{
        base: "bg-transparent",
        closeButton: "top-6 right-6"
      }}
      hideCloseButton
    >
      <ModalContent>
        {() => (
          <div className="relative w-full h-screen">
            <Swiper
              grabCursor={true}
              slidesPerView={1}
              initialSlide={initialSlide}
              loop={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full h-screen"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="h-full flex items-center justify-center">
                    <img
                      src={image.src}
                      alt={`Photo by ${image.author}`}
                      className="w-full h-auto max-h-screen object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center items-center gap-4">
                <Button
                  size="lg"
                  variant="flat"
                  color="default"
                  onPress={() => swiperRef.current?.slidePrev()}
                >
                  Prev
                </Button>
                <Button
                  size="lg"
                  variant="flat"
                  color="default"
                  onPress={onClose}
                >
                  Close
                </Button>
                <Button
                  size="lg"
                  variant="flat"
                  color="default"
                  onPress={() => swiperRef.current?.slideNext()}
                >
                  Next
                </Button>
              </div>
            </Swiper>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
} 