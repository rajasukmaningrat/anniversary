import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

const PHOTO_SRC = null

function AboutHer() {
  return (
    <section className="content-section content-section--about">
      <div className="about-tulips" aria-hidden="true">
        <div className="about-tulips__group about-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="about-tulips__t1" />
          <Tulip variant="xs" flip tilt="right" className="about-tulips__t2" />
        </div>
        <div className="about-tulips__group about-tulips__group--br">
          <Tulip variant="sm" flip tilt="right" className="about-tulips__t1" />
        </div>
      </div>

      <div className="container">
        <ScrollReveal>
          <p className="about-lead">
            Dan sebelum bercerita tentang kita,
            <br />
            aku ingin bercerita sedikit tentang kamu.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="about-heading">
            Untuk seseorang yang selalu punya tempat sendiri di hatiku
          </h2>
        </ScrollReveal>

        <div className="about-grid">
          <ScrollReveal delay={180}>
            <figure className="about-photo">
              {PHOTO_SRC ? (
                <img
                  className="about-photo__img"
                  src={PHOTO_SRC}
                  alt="Foto Syarifah Ayu Bilqis"
                />
              ) : (
                <div className="about-photo__placeholder" aria-hidden="true">
                  <span className="about-photo__monogram">A</span>
                  <div className="about-photo__tulips">
                    <Tulip
                      variant="sm"
                      tilt="right"
                      className="about-photo__t1"
                    />
                    <Tulip
                      variant="sm"
                      flip
                      tilt="left"
                      className="about-photo__t2"
                    />
                  </div>
                </div>
              )}
              <figcaption className="about-photo__caption">
                Syarifah Ayu Bilqis
                <span className="about-photo__nicknames">
                  Cayang · Cantik · Cinta · Ayy
                </span>
              </figcaption>
            </figure>
          </ScrollReveal>

          <div className="about-text">
            <ScrollReveal delay={240}>
              <p className="about-text__p">
                Namanya Syarifah Ayu Bilqis. Aku biasa memanggilnya Cayang,
                kadang Cantik, kadang Cinta, kadang Ayy — tergantung dia mau
                dipanggil yang mana hari itu.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={320}>
              <p className="about-text__p">
                Kami sudah saling kenal sejak kecil, jadi aku tahu betul: dari
                luar dia terlihat kuat dan berani, tapi di balik itu ada sisi
                lembut yang bikin aku makin sayang — sosok yang suka warna
                pink, suka tulip, suka cokelat, dan kadang diam-diam senang
                diperlakukan seperti princess.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <p className="about-text__p">
                Bagiku dia bukan cuma pacar. Dia teman, tempat bercerita,
                supporter pertama di setiap hal kecil, dan seseorang yang
                selalu ada.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHer