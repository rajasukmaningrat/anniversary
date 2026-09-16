import { useEffect, useRef, useState } from 'react'
import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { MEMORIES_IMAGES, MEMORY_VIDEOS } from 'virtual:cayang-media'

const CAPTIONS = [
  'sebuah kenangan',
  'momen kecil kita',
  'yang tak mau kulupakan',
]

function MemoryVideo({ media }) {
  const [ratio, setRatio] = useState(null)
  const [failed, setFailed] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target
          if (entry.isIntersecting) {
            el.play().catch(() => {})
          } else {
            el.pause()
          }
        })
      },
      { threshold: 0.2 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  if (failed) {
    return (
      <figure className="screen-memory__tile screen-memory__tile--video screen-memory__tile--tilt-right">
        <div
          className="screen-memory__fallback"
          role="img"
          aria-label="Video kenangan bersama Ayu"
        >
          <span aria-hidden="true">♡</span>
        </div>
        {media.caption && (
          <figcaption className="screen-memory__caption">{media.caption}</figcaption>
        )}
      </figure>
    )
  }

  return (
    <figure
      className="screen-memory__tile screen-memory__tile--video screen-memory__tile--tilt-left"
      style={ratio ? { aspectRatio: `${ratio.w} / ${ratio.h}` } : undefined}
    >
      <video
        ref={videoRef}
        className="screen-memory__video"
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Video kenangan bersama Ayu"
        onError={() => setFailed(true)}
        onLoadedMetadata={(event) => {
          const video = event.currentTarget
          if (video.videoWidth && video.videoHeight) {
            setRatio({ w: video.videoWidth, h: video.videoHeight })
          }
        }}
      />
      {media.caption && (
        <figcaption className="screen-memory__caption">{media.caption}</figcaption>
      )}
    </figure>
  )
}

function Memories() {
  return (
    <section className="app-screen screen--memory">
      <div className="screen-memory__tulips" aria-hidden="true">
        <Tulip variant="xs" flip className="screen-memory__tulip screen-memory__tulip--tl" />
        <Tulip variant="xs" className="screen-memory__tulip screen-memory__tulip--br" />
      </div>

      <span className="screen-label">Memories</span>
      <h2 className="screen-memory__heading">Kenangan yang ingin aku simpan</h2>
      <p className="screen-memory__lead">
        Beberapa momen kecil yang selalu punya tempat sendiri.
      </p>

      <div className="screen-memory__wall">
        {MEMORY_VIDEOS.map((src, index) => (
          <MemoryVideo
            key={src}
            media={{ src, caption: CAPTIONS[index % CAPTIONS.length] }}
          />
        ))}
        {MEMORIES_IMAGES.map((src, index) => (
          <figure
            key={src}
            className={`screen-memory__tile screen-memory__tile--photo screen-memory__tile--t${index % 3}`}
          >
            <MediaPhoto
              className="screen-memory__img"
              src={src}
              alt="Kenangan bersama Ayu"
              mark="♡"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Memories