import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

const PHOTOS = [
  {
    key: 't1',
    aspect: 'feature',
    caption: 'our little moments',
    tulip: 'sm',
  },
  { key: 't2', aspect: 'portrait' },
  { key: 't3', aspect: 'portrait', offset: true },
  { key: 't4', aspect: 'medium' },
  { key: 't5', aspect: 'portrait', caption: 'tentang kita' },
  { key: 't6', aspect: 'portrait' },
  { key: 't7', aspect: 'square' },
  { key: 't8', aspect: 'small', caption: 'favorite memories' },
]

function Placeholder({ variant = 'xs' }) {
  return (
    <span className="gallery-together__ph" aria-hidden="true">
      <Tulip variant={variant} tilt="right" className="gallery-together__ph-t1" />
      <Tulip variant={variant} flip tilt="left" className="gallery-together__ph-t2" />
    </span>
  )
}

function PhotoGalleryTogether() {
  return (
    <section className="content-section content-section--together">
      <div className="together-tulips" aria-hidden="true">
        <div className="together-tulips__group together-tulips__group--tl">
          <Tulip variant="xs" tilt="left" className="together-tulips__t1" />
        </div>
        <div className="together-tulips__group together-tulips__group--tr">
          <Tulip variant="md" flip className="together-tulips__t1" />
          <Tulip variant="xs" tilt="right" className="together-tulips__t2" />
        </div>
        <div className="together-tulips__group together-tulips__group--ml">
          <Tulip variant="xs" flip className="together-tulips__t1" />
          <Tulip variant="xs" tilt="left" className="together-tulips__t2" />
        </div>
        <div className="together-tulips__group together-tulips__group--mr">
          <Tulip variant="xs" flip tilt="right" className="together-tulips__t1" />
        </div>
        <div className="together-tulips__group together-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="together-tulips__t1" />
          <Tulip variant="xs" flip className="together-tulips__t2" />
        </div>
        <div className="together-tulips__group together-tulips__group--br">
          <Tulip variant="md" tilt="right" className="together-tulips__t1" />
          <Tulip variant="xs" flip tilt="left" className="together-tulips__t2" />
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <p className="gallery-together__lead">
            Dan dari semua cerita itu, akhirnya ada kita.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="gallery-together__heading">
            Beberapa cerita favoritku tentang kita
          </h2>
        </ScrollReveal>

        <div className="gallery-together">
          {PHOTOS.map((photo, i) => (
            <ScrollReveal
              key={photo.key}
              className={`gallery-together__tile gallery-together__tile--${photo.aspect}${photo.offset ? ' gallery-together__tile--offset' : ''}`}
              delay={150 + i * 80}
            >
              <figure className="gallery-together__figure">
                <Placeholder variant={photo.tulip ?? 'xs'} />
                {photo.caption && (
                  <figcaption className="gallery-together__caption">
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

export default PhotoGalleryTogether