import { useState } from 'react'

function MediaPhoto({ src, alt, className = '', mark = '♡' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`media-fallback ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="media-fallback__mark" aria-hidden="true">
          {mark}
        </span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default MediaPhoto