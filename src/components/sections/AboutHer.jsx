import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { AYU_IMAGES } from 'virtual:cayang-media'

const FACTS = [
  { label: 'suka pink' },
  { label: 'suka tulip' },
  { label: 'suka chocolate' },
  { label: 'kadang princess' },
]

function AboutHer() {
  return (
    <section className="app-screen screen--about">
      <div className="screen-about__tulips" aria-hidden="true">
        <Tulip variant="xs" flip className="screen-about__tulip screen-about__tulip--tl" />
        <Tulip variant="xs" tilt="right" className="screen-about__tulip screen-about__tulip--br" />
      </div>

      <span className="screen-label">About Her</span>
      <h2 className="screen-about__name">Syarifah Ayu Bilqis</h2>
      <p className="screen-about__nicknames">Cayang · Cantik · Cinta · Ayy</p>

      <div className="screen-about__facts" aria-label="Hal yang dia suka">
        {FACTS.map((fact) => (
          <span key={fact.label} className="screen-about__fact">
            {fact.label}
          </span>
        ))}
      </div>

      <div className="screen-about__text">
        <p className="screen-about__p">
          Teman sejak kecil. Dari luar dia terlihat kuat dan berani,
          tapi sebenarnya sangat lembut.
        </p>
        <p className="screen-about__p">
          Buatku dia bukan cuma kekasih — juga teman, supporter pertama,
          dan sosok yang selalu ada.
        </p>
      </div>

      <h3 className="screen-about__gallery-title">potret Ayu</h3>
      <div className="gallery" aria-label="Galeri foto Ayu">
        {AYU_IMAGES.map((src, index) => (
          <figure
            key={src}
            className={`gallery__tile gallery__tile--t${index % 3}`}
          >
            <MediaPhoto
              className="gallery__img"
              src={src}
              alt="Foto Ayu"
              mark="A"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default AboutHer