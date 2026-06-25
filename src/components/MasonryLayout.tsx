interface MasonryLayoutProps {
  children: React.ReactNode;
}

export const MasonryLayout = ({ children }: MasonryLayoutProps) => {
  return (
    <div className="columns-1 gap-5 min-[1024px]:gap-8 min-[390px]:columns-2 min-[760px]:columns-3 min-[1280px]:columns-4 [&>img:not(:first-child)]:mt-5 min-[1024px]:[&>img:not(:first-child)]:mt-8">
      {children}
    </div>
  );
}; 