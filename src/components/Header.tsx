import { StyledLink } from './StyledLink';

export const Header = () => {
  const currentYear = new Date().getFullYear();

  return (
    <header className="mb-16 max-w-3xl min-[768px]:mb-24">
      <h1 className="mb-4 text-3xl min-[768px]:mb-6 min-[768px]:text-4xl min-[1024px]:text-5xl">
        Masonry Gallery
      </h1>
      <div className="flex flex-col text-balance text-sm font-light text-gray-600 min-[768px]:text-base">
        <span>A demo masonry layout built with Tailwind CSS.</span>
        <span>
          All images are sourced from{' '}
          <StyledLink href="https://unsplash.com">Unsplash.</StyledLink> Source
          code available on{' '}
          <StyledLink href="https://github.com/teplostanski/masonry-gallery-tailwind">
            GitHub.
          </StyledLink>
        </span>
        <span>
          © 2025-{currentYear} Igor Teplostanski. All rights reserved.
        </span>
      </div>
    </header>
  );
};
