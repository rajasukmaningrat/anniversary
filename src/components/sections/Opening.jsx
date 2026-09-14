import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

function Opening() {
  return (
    <section className="content-section content-section--opening">
      <div className="opening-tulips" aria-hidden="true">
        <div className="opening-tulips__group opening-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="opening-tulips__t1" />
          <Tulip variant="xs" flip tilt="right" className="opening-tulips__t2" />
        </div>
        <div className="opening-tulips__group opening-tulips__group--br">
          <Tulip variant="sm" flip tilt="right" className="opening-tulips__t1" />
          <Tulip variant="xs" tilt="left" className="opening-tulips__t2" />
        </div>
      </div>
      <div className="container">
        <ScrollReveal>
          <span className="opening-label">Untuk kamu</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="opening-heading">
            Setahun yang lalu, kita memulai sesuatu yang sampai sekarang masih
            ingin aku syukuri.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={200}>
          <p className="opening-body">
            Aku nggak tahu harus mulai dari mana, tapi yang jelas, hari-hari
            yang kita lewati bareng ini selalu bikin aku ngerasa bersyukur.
            Aku bersyukur kamu ada di sini, di setiap langkah kecil yang kita
            jalani.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={300}>
          <p className="opening-transition">
            Dan sebelum bercerita tentang kita,
            <br />
            aku ingin bercerita sedikit tentang kamu.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Opening