import { useState } from 'react'
import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { MEMORIES_IMAGES, TOGETHER_IMAGES } from 'virtual:cayang-media'

const MEMORY_VIDEOS = [
  { src: '/videos/vidio-01.mp4', caption: 'sebuah kenangan' },
  { src: '/videos/vidio-02.mp4', caption: 'momen kecil kita' },
  { src: '/videos/vidio-03.mp4', caption: 'yang tak mau kulupakan' },
]

function MemoryVideo({ media }) {
  const [ratio, setRatio] = useState(null)
  const [failed, setFailed] = useState(false)

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
        className="screen-memory__video"
        src={media.src}
        controls
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
        {MEMORY_VIDEOS.map((media) => (
          <MemoryVideo key={media.src} media={media} />
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
        {TOGETHER_IMAGES.map((src, index) => (
          <figure
            key={src}
            className={`screen-memory__tile screen-memory__tile--photo screen-memory__tile--t${(index + 1) % 3}`}
          >
            <MediaPhoto
              className="screen-memory__img"
              src={src}
              alt="Foto bersama Ayu"
              mark="♡"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default Memories