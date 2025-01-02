interface HeaderProps {
  currentYear: number;
}

export const Header = ({ currentYear }: HeaderProps) => {
  return (
    <header className="max-w-3xl mb-16 md:mb-24">
      <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6">Masonry Gallery</h1>
      <p className="text-gray-600 font-light text-sm md:text-base">
        A demo masonry layout built with Tailwind CSS. 
        All images are sourced from <a href="https://unsplash.com" className="text-gray-600 underline">Unsplash</a>.
        <br />
        © {currentYear} Masonry Gallery Demo. All rights reserved.
      </p>
    </header>
  );
}; 