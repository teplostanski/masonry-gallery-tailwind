import { StyledLink } from "./StyledLink";

interface HeaderProps {
  currentYear: number;
}

export const Header = ({ currentYear }: HeaderProps) => {
  return (
    <header className="max-w-3xl mb-16 md:mb-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Masonry Gallery</h1>
      <div className="text-gray-600 font-light text-sm md:text-base flex flex-col text-balance">
        <span>A demo masonry layout built with Tailwind CSS.</span> 
        <span>All images are sourced from <StyledLink href="https://unsplash.com">Unsplash</StyledLink>. Source code available on{" "}
        <StyledLink href="https://github.com/your-username/masonry-gallery-tailwind">
          GitHub
        </StyledLink></span>
        
        <span>© {currentYear} Igor Teplostanski. All rights reserved. </span>
      </div>
    </header>
  );
}; 