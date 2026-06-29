# Masonry Gallery

An image gallery with a Pinterest-like masonry layout.

![Gallery screenshot](./screen.png)

## Demo

[Masonry Gallery](https://teplostanski.github.io/masonry-gallery-tailwind/)

## Stack

- React 19
- TypeScript 5
- Vite 8
- Tailwind CSS 4


## Features

- Responsive `masonry` layout
- Responsive design
- Modern UI

## Running locally

1. Clone the repository:
```bash
git clone https://github.com/teplostanski/masonry-gallery-tailwind.git
cd masonry-gallery-tailwind
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Breakpoints

| Width    | Columns | Gap   |
|----------|---------|-------|
| `< 380`  | 1       | 20px  |
| `≥ 380`  | 2       | 20px  |
| `≥ 768`  | 3       | 20px  |
| `≥ 1024` | —       | 32px  |
| `≥ 1280` | 4       | 32px  |

## Masonry

```tsx
import { Masonry } from './masonry'

<Masonry>{photos.map((photo) => <Card key={photo.id} {...photo} />)}</Masonry>

// Override columns / gap:
<Masonry className="columns-2 gap-4 min-[900px]:columns-3">
  ...
</Masonry>
```

<br>

[![Donate](https://img.shields.io/static/v1?label=donate&message=teplostanski.me&color=4F46E5)](https://thanks.teplostanski.me)
