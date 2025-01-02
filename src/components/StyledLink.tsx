import { Link, LinkProps } from "@nextui-org/react";

interface StyledLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const StyledLink = ({ children, ...props }: StyledLinkProps) => (
  <Link
    className="text-gray-600 underline"
    isExternal
    {...props}
  >
    {children}
  </Link>
); 