import { Button, ButtonProps } from "@nextui-org/react";

interface ControlButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export const ControlButton = ({ children, ...props }: ControlButtonProps) => (
  <Button
    className="text-white bg-white/10 backdrop-blur-xl border-white/20"
    size="lg"
    variant="bordered"
    {...props}
  >
    {children}
  </Button>
); 