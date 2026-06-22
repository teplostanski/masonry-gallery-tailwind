import { Link, type LinkProps } from "@heroui/react";

interface StyledLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const StyledLink = ({ children, ...props }: StyledLinkProps) => (
  <Link
    className="text-gray-700 font-light underline underline-offset-2 decoration-gray-500 decoration-1"
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </Link>
);
