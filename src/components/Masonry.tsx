import { Children, type ReactElement, type ReactNode } from 'react';

export type MasonryProps = {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
};

const DEFAULT_COLUMNS =
  'columns-1 min-[380px]:columns-2 min-[768px]:columns-3 min-[1280px]:columns-4 gap-5 min-[1024px]:gap-8';

const DEFAULT_ITEM = 'mb-5 break-inside-avoid min-w-0 w-full min-[1024px]:mb-8';

export function Masonry({
  children,
  className = '',
  itemClassName = '',
}: MasonryProps) {
  const items = Children.toArray(children) as ReactElement[];

  return (
    <div
      className={[
        'w-full min-w-0 [column-fill:balance]',
        DEFAULT_COLUMNS,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {items.map((child, index) => (
        <div
          key={child.key ?? index}
          className={[DEFAULT_ITEM, itemClassName].filter(Boolean).join(' ')}
        >
          {child}
        </div>
      ))}
    </div>
  );
}
