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
          Sedikit cerita tentang syalipah, Mungkin kebanykan orang yang kenal ceces berfikir ceceslear itu orangnya serius,cuek,judes,atau mungkin galak
          Tapi buat aku NOPE. Aku pun di awal ketemu dia setelah dia pulang dari pondok pun juga berpikir gitu,
          Tapi ternyata semua perasangka ku salah semua, Ternyata dia just a 19 year old kid like most teenagers that age,
          Yap aku pun tahunya itupun setelah menjadi salah satu momen kecil yang ada di hidupnya (JADI PACALNYA HEHEHEEHEHEHEHEEH)
        </p>
        <p className="screen-about__p">
          Setelah akhirnya aku merusuhi Hidupnya yang damai Yap i know NOW dia itu just a kid yang keras dengan dirinya sendiri 
          Kalian kalau mau tau yaaa CICIS ini tu yallah baik,pinter,cantik,pengertian,CENGENG,selalau menjadiakn aku perioritas.
          Kalau kalian bertanya seperti apa sih ceces di mataku 
          YAPP aku akan jawab dengan lantang (DIA CANRIKKU PRINCESSKU MY LOVE MY EVERYTHING))
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