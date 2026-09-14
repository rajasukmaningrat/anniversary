import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

function ThankYou() {
  return (
    <section className="content-section content-section--thankyou">
      <div className="thankyou-tulips" aria-hidden="true">
        <div className="thankyou-tulips__group thankyou-tulips__group--tl">
          <Tulip variant="sm" tilt="left" className="thankyou-tulips__t1" />
          <Tulip variant="xs" flip className="thankyou-tulips__t2" />
        </div>
        <div className="thankyou-tulips__group thankyou-tulips__group--tr">
          <Tulip variant="md" flip tilt="right" className="thankyou-tulips__t1" />
          <Tulip variant="xs" tilt="left" className="thankyou-tulips__t2" />
          <Tulip variant="xs" flip className="thankyou-tulips__t3" />
        </div>
        <div className="thankyou-tulips__group thankyou-tulips__group--ml">
          <Tulip variant="xs" tilt="left" className="thankyou-tulips__t1" />
          <Tulip variant="xs" flip className="thankyou-tulips__t2" />
        </div>
        <div className="thankyou-tulips__group thankyou-tulips__group--mr">
          <Tulip variant="sm" flip tilt="right" className="thankyou-tulips__t1" />
        </div>
        <div className="thankyou-tulips__group thankyou-tulips__group--bl">
          <Tulip variant="sm" tilt="left" className="thankyou-tulips__t1" />
          <Tulip variant="xs" flip className="thankyou-tulips__t2" />
        </div>
        <div className="thankyou-tulips__group thankyou-tulips__group--br">
          <Tulip variant="md" tilt="right" className="thankyou-tulips__t1" />
          <Tulip variant="xs" flip tilt="left" className="thankyou-tulips__t2" />
        </div>
      </div>

      <div className="container thankyou-content">
        <ScrollReveal>
          <span className="thankyou-label">01 tahun bersama</span>
        </ScrollReveal>
        <ScrollReveal delay={100}>
          <h2 className="thankyou-heading">
            Terima kasih sudah menjadi bagian dari satu tahun ini.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="thankyou-text">
            Setahun ternyata bisa terasa cepat ketika dijalani bersama
            seseorang yang berarti.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={260}>
          <p className="thankyou-text">
            Selama satu tahun ini, kamu bukan hanya pacarku. Kamu jadi teman,
            tempat aku cerita, dan seseorang yang selalu ada — entah aku butuh
            dukungan atau sekadar butuh pelukan.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={340}>
          <p className="thankyou-text">
            Dari kamu aku belajar: kuat itu nggak harus selalu kelihatan, dan
            lembut itu juga sebuah kekuatan.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={420}>
          <p className="thankyou-highlight">
            Terima kasih sudah tetap menjadi kamu.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={500}>
          <p className="thankyou-text thankyou-text--closing">
            Dan kalau satu tahun pertama ini adalah awalnya,
            <br />
            aku ingin terus melihat cerita kita bertumbuh.
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default ThankYou
