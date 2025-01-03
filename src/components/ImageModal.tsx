import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Modal, ModalContent } from "@nextui-org/modal";
import type { Swiper as SwiperType } from 'swiper';
import { ModalControls } from './ModalControls';
import 'swiper/css';

interface ImageModalProps {
  images: { src: string; author: string }[];
  initialSlide: number;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({ images, initialSlide, isOpen, onClose }: ImageModalProps) {
  const swiperRef = useRef<SwiperType>();

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

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
          <div className="relative w-full h-svh">
            <Swiper
              grabCursor={true}
              slidesPerView={1}
              initialSlide={initialSlide}
              loop={true}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              className="w-full h-svh"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="h-svh flex items-center justify-center">
                    <img
                      src={`${import.meta.env.VITE_BASE_URL}${image.src}`}
                      alt={`Photo by ${image.author}`}
                      className="w-full h-auto max-h-svh object-contain"
                    />
                  </div>
                </SwiperSlide>
              ))}
              <ModalControls
                onPrev={handlePrev}
                onNext={handleNext}
                onClose={onClose}
              />
            </Swiper>
          </div>
        )}
      </ModalContent>
    </Modal>
  );
} 