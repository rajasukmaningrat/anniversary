import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { AYU_IMAGES } from 'virtual:cayang-media'

const FACTS = [
  { label: 'suka pink' },
  { label: 'suka malah-malah' },
  { label: 'suka mam jajan' },
  { label: 'SUKA ECIM' },
  { label: 'SUKA TIBA TIBA BINTITAN HHAHAHAHAHAHAAH'}
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
      <p className="screen-about__nicknames"> · Plincess · Cicis · </p>

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
          Seorang Anak perempuan yang cantik yang aku temui bukan dari sebuah kebetulan tapi dari sebuah keberanian CIAH BERANI GAK TU 
          Ya bayangin aja gess seorang syarifah ayu bilqis dia cantik pinter berkarisma dan CUEK dapet saya gess bocah yang masih bingung 
          dengan dirinya 
          kalau aku mau mendefinisasikan dia yaa DIA PACALKU hehehehehe
        </p>
        <p className="screen-about__p">
          Buatku dia bukan cuma kekasih — juga teman, supporter pertama,
          dan sosok yang selalu ada.
          Bahkan selalu menjadi yang pertama ketika aku lagi down yapp dia yang sellau ada
          SABARR SABARR KATA KATA SERIUSNYA NANTII SABAR YAAKK 
        </p>
      </div>

      <h3 className="screen-about__gallery-title">Potret Bos Salipah</h3>
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