import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { TOGETHER_IMAGES } from 'virtual:cayang-media'

const STORY = [
  {
    label: 'kenal',
    text: 'Kami berteman sejak kecil. Aku sudah lama menyukainya diam-diam — dan sempat tidak percaya diri, bertanya-tanya apakah seseorang seperti aku bisa disukai olehnya.',
  },
  {
    label: 'gap year',
    text: 'Saat dia gap year sebelum kuliah, aku mulai menghubunginya. Alasan pertamaku: meminta rekomendasi film.',
  },
  {
    label: '17-an',
    text: 'Kami ikut mengurus acara 17-an, dan aku meminta bantuannya membuat banner acara.',
  },
  {
    label: 'makin dekat',
    text: 'Awalnya dia membalas chat dengan cukup lama. Pelan-pelan komunikasi kami makin sering, dan kami makin dekat.',
  },
  {
    label: 'hampir HTS',
    text: 'Samar-samar rasanya seperti fase HTS — dekat, hangat, tanpa ada yang benar-benar menyebutnya.',
  },
  {
    label: 'konser',
    text: 'Kami pernah pergi ke konser bersama teman-teman. Setelah itu, aku mulai memberanikan diri.',
  },
  {
    label: 'ungkapan hati',
    text: 'Akhirnya aku mengungkapkan perasaan lewat chat Instagram.',
  },
  {
    label: 'sekarang',
    text: 'Dari luar dia terlihat kuat dan berani, tetapi sebenarnya sangat lembut — dan aku bersyukur bisa melihat sisi itu.',
  },
]

function OurStory() {
  return (
    <section className="app-screen screen--story">
      <div className="screen-story__tulips" aria-hidden="true">
        <Tulip variant="xs" flip tilt="right" className="screen-story__tulip screen-story__tulip--tr" />
        <Tulip variant="xs" tilt="left" className="screen-story__tulip screen-story__tulip--bl" />
      </div>

      <span className="screen-label">Our Story</span>
      <h2 className="screen-story__heading">Cerita Kita</h2>

      <ol className="screen-story__list">
        {STORY.map((part) => (
          <li key={part.label} className="screen-story__item">
            <span className="screen-story__dot" aria-hidden="true" />
            <div className="screen-story__body">
              <p className="screen-story__label">{part.label}</p>
              <p className="screen-story__text">{part.text}</p>
            </div>
          </li>
        ))}
      </ol>

      <h3 className="screen-story__gallery-title">foto-foto kita</h3>
      <div className="gallery" aria-label="Galeri foto bersama">
        {TOGETHER_IMAGES.map((src, index) => (
          <figure
            key={src}
            className={`gallery__tile gallery__tile--t${index % 3}`}
          >
            <MediaPhoto
              className="gallery__img"
              src={src}
              alt="Foto bersama"
              mark="♡"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default OurStory