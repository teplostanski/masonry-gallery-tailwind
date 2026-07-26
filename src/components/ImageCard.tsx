interface ImageCardProps {
  src: string
  author: string
  id: number
  width: number
  height: number
  /** First row images can skip lazy for LCP. */
  priority?: boolean
}

function withWidthSuffix(src: string, width: 200 | 400): string {
  return src.replace(/\.webp$/i, `-${width}.webp`)
}

/**
 * Masonry columns: <380:1 · 380:2 · 768:3 · 1280:4
 * Mobile 2-col ≈ 160–190px CSS → 200w / 400w cover 1x–2x DPR.
 */
const SIZES =
  '(max-width: 379px) calc(100vw - 2.5rem), (max-width: 767px) calc(50vw - 1.75rem), (max-width: 1279px) calc(33.333vw - 1.5rem), calc(25vw - 1.5rem)'

export const ImageCard = ({
  src,
  author,
  id,
  width,
  height,
  priority = false,
}: ImageCardProps) => {
  const base = import.meta.env.VITE_BASE_URL
  const full = `${base}${src}`
  const w200 = `${base}${withWidthSuffix(src, 200)}`
  const w400 = `${base}${withWidthSuffix(src, 400)}`

  return (
    <div className="w-full break-inside-avoid">
      <img
        src={w400}
        srcSet={`${w200} 200w, ${w400} 400w, ${full} 640w`}
        sizes={SIZES}
        width={width}
        height={height}
        alt={`Photo by ${author}`}
        className="block h-auto w-full"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <p className="mt-2 text-sm text-gray-600">
        Photo #{id} <span className="font-light">by {author}</span>
      </p>
    </div>
  )
}
