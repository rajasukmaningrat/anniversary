import { useState } from 'react'

function MediaPhoto({ src, alt, className = '', mark = '♡', priority = false }) {
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
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
      fetchPriority={priority ? 'high' : 'auto'}
      onError={() => setFailed(true)}
    />
  )
}

export default MediaPhoto