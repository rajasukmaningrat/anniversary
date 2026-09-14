import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

const PHOTOS = [
  {
    key: 'm1',
    aspect: 'feature',
    caption: 'momen kecil',
    tulip: 'sm',
  },
  { key: 'm2', aspect: 'portrait', tilt: 'left' },
  { key: 'm3', aspect: 'portrait', offset: true, tilt: 'right' },
  { key: 'm4', aspect: 'medium' },
  { key: 'm5', aspect: 'portrait', tilt: 'right' },
  { key: 'm6', aspect: 'portrait', tilt: 'left' },
  { key: 'm7', aspect: 'small', caption: 'yang ingin aku ingat' },
]

function Placeholder({ variant = 'xs' }) {
  return (
    <span className="memory-ph" aria-hidden="true">
      <span className="memory-ph__heart">&hearts;</span>
      <Tulip variant={variant} className="memory-ph__tulip" />
    </span>
  )
}

function FinalMemoryGallery() {
  return (
    <section className="content-section content-section--memory">
      <div className="memory-tulips" aria-hidden="true">
        <div className="memory-tulips__group memory-tulips__group--tl">
          <Tulip variant="sm" tilt="left" className="memory-tulips__t1" />
          <Tulip variant="xs" flip className="memory-tulips__t2" />
        </div>
        <div className="memory-tulips__group memory-tulips__group--tr">
          <Tulip variant="md" flip className="memory-tulips__t1" />
          <Tulip variant="xs" tilt="right" className="memory-tulips__t2" />
        </div>
        <div className="memory-tulips__group memory-tulips__group--ml">
          <Tulip variant="xs" flip className="memory-tulips__t1" />
          <Tulip variant="xs" tilt="left" className="memory-tulips__t2" />
        </div>
        <div className="memory-tulips__group memory-tulips__group--mr">
          <Tulip variant="sm" tilt="right" className="memory-tulips__t1" />
        </div>
        <div className="memory-tulips__group memory-tulips__group--bl">
          <Tulip variant="md" tilt="left" className="memory-tulips__t1" />
          <Tulip variant="xs" flip className="memory-tulips__t2" />
        </div>
        <div className="memory-tulips__group memory-tulips__group--br">
          <Tulip variant="sm" flip tilt="right" className="memory-tulips__t1" />
          <Tulip variant="xs" className="memory-tulips__t2" />
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <p className="memory__lead">
            Masih banyak momen kecil yang mungkin sederhana,
            <br />
            tapi selalu punya tempat sendiri di ingatanku.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="memory__heading">Kenangan yang ingin aku simpan</h2>
        </ScrollReveal>

        <div className="memory-gallery">
          {PHOTOS.map((photo, i) => (
            <ScrollReveal
              key={photo.key}
              className={`memory-gallery__tile memory-gallery__tile--${photo.aspect}${photo.offset ? ' memory-gallery__tile--offset' : ''}`}
              delay={150 + i * 80}
            >
              <figure
                className={`memory-gallery__figure${photo.tilt ? ` memory-gallery__figure--tilt-${photo.tilt}` : ''}`}
              >
                <Placeholder variant={photo.tulip ?? 'xs'} />
                {photo.caption && (
                  <figcaption className="memory-gallery__caption">
                    {photo.caption}
                  </figcaption>
                )}
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalMemoryGallery