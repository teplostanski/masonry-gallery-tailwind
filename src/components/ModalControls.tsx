import { ControlButton } from "./ControlButton";

interface ModalControlsProps {
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

export const ModalControls = ({ onPrev, onNext, onClose }: ModalControlsProps) => {
  return (
    <div className="absolute bottom-4 left-0 right-0 z-10 flex justify-center items-center gap-4">
      <ControlButton onPress={onPrev}>Prev</ControlButton>
      <ControlButton onPress={onClose}>Close</ControlButton>
      <ControlButton onPress={onNext}>Next</ControlButton>
    </div>
  );
}; 