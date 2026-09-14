import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

const PHOTOS = [
  { key: 'g1', aspect: 'feature', caption: 'senyum favoritku', tulip: 'sm' },
  { key: 'g2', aspect: 'portrait' },
  { key: 'g3', aspect: 'portrait', offset: true },
  { key: 'g4', aspect: 'medium' },
  { key: 'g5', aspect: 'portrait', caption: 'cantikku' },
  { key: 'g6', aspect: 'portrait' },
]

function Placeholder({ variant = 'xs' }) {
  return (
    <span className="gallery-ayu__ph" aria-hidden="true">
      <Tulip variant={variant} className="gallery-ayu__ph-tulip" />
    </span>
  )
}

function PhotoGalleryAyu() {
  return (
    <section className="content-section content-section--gallery">
      <div className="gallery-tulips" aria-hidden="true">
        <div className="gallery-tulips__group gallery-tulips__group--tr">
          <Tulip variant="xs" flip tilt="right" className="gallery-tulips__t1" />
        </div>
        <div className="gallery-tulips__group gallery-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="gallery-tulips__t1" />
          <Tulip variant="xs" flip className="gallery-tulips__t2" />
        </div>
        <div className="gallery-tulips__group gallery-tulips__group--br">
          <Tulip variant="xs" flip tilt="right" className="gallery-tulips__t1" />
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <p className="gallery-ayu__lead">
            Dan sebenarnya, masih banyak hal kecil tentang kamu
            <br />
            yang selalu aku suka.
          </p>
        </ScrollReveal>

        <div className="gallery-ayu">
          {PHOTOS.map((photo, i) => (
            <ScrollReveal
              key={photo.key}
              className={`gallery-ayu__tile gallery-ayu__tile--${photo.aspect}${photo.offset ? ' gallery-ayu__tile--offset' : ''}`}
              delay={100 + i * 80}
            >
              <figure className="gallery-ayu__figure">
                <Placeholder variant={photo.tulip ?? 'xs'} />
                {photo.caption && (
                  <figcaption className="gallery-ayu__caption">
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

export default PhotoGalleryAyu
