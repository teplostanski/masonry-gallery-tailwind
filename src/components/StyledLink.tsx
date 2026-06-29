import type { AnchorHTMLAttributes, ReactNode } from 'react'

type StyledLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export const StyledLink = ({ children, className = '', ...props }: StyledLinkProps) => (
  <a
    className={`font-light text-gray-700 underline decoration-gray-500 decoration-1 underline-offset-2 ${className}`.trim()}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {children}
  </a>
)
