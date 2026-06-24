import { StyledLink } from "./StyledLink";

interface HeaderProps {
  currentYear: number;
}

export const Header = ({ currentYear }: HeaderProps) => {
  return (
    <header className="max-w-3xl mb-16 min-[768px]:mb-24">
      <h1 className="text-3xl min-[768px]:text-4xl min-[1024px]:text-5xl mb-4 min-[768px]:mb-6">Masonry Gallery</h1>
      <div className="text-gray-600 font-light text-sm min-[768px]:text-base flex flex-col text-balance">
        <span>A demo masonry layout built with Tailwind CSS.</span> 
        <span>All images are sourced from <StyledLink href="https://unsplash.com">Unsplash.</StyledLink> Source code available on{" "}
        <StyledLink href="https://github.com/teplostanski/masonry-gallery-tailwind">
          GitHub.
        </StyledLink></span>
        
        <span>© 2025-{currentYear} Igor Teplostanski. All rights reserved. </span>
      </div>
    </header>
  );
}; 