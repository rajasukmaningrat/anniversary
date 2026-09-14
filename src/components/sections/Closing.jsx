import { Mail } from 'lucide-react'
import Tulip from '../Tulip'
import ScrollReveal from '../ScrollReveal'

function Closing({ onReopen }) {
  return (
    <section className="content-section content-section--closing">
      <ScrollReveal className="closing-deco" delay={400}>
        <div className="closing-deco__group closing-deco__group--tl">
          <Tulip variant="sm" tilt="left" className="closing-deco__t1" />
          <Tulip variant="xs" flip className="closing-deco__t2" />
        </div>
        <div className="closing-deco__group closing-deco__group--tr">
          <Tulip variant="sm" flip tilt="right" className="closing-deco__t1" />
          <Tulip variant="xs" flip className="closing-deco__t2" />
        </div>
        <div className="closing-deco__group closing-deco__group--bl">
          <Tulip variant="xs" className="closing-deco__t1" />
          <Tulip variant="sm" flip className="closing-deco__t2" />
          <Tulip variant="md" tilt="left" className="closing-deco__t3" />
        </div>
        <div className="closing-deco__group closing-deco__group--br">
          <Tulip variant="xs" flip className="closing-deco__t1" />
          <Tulip variant="sm" tilt="right" className="closing-deco__t2" />
          <Tulip variant="md" flip className="closing-deco__t3" />
        </div>
      </ScrollReveal>

      <div className="container closing-inner">
        <ScrollReveal delay={0}>
          <p className="closing-label">Untuk satu tahun kita</p>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="closing-title">
            Terima kasih sudah sampai di sini bersamaku.
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <p className="closing-text">
            Terima kasih untuk satu tahun yang sudah kita lewati. Untuk semua
            cerita, tawa, obrolan, dan hal-hal kecil yang mungkin sederhana,
            tapi berarti buat aku.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={260}>
          <p className="closing-text closing-text--personal">
            Semoga setelah ini masih ada banyak cerita yang bisa kita tulis
            bersama.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={340}>
          <p className="closing-final">Happy Anniversary, Cayang. &hearts;</p>
        </ScrollReveal>

        <ScrollReveal className="closing-envelope-reveal" delay={480}>
          <div className="closing-envelope-scene" aria-hidden="true">
            <div className="closing-envelope-tulip">
              <Tulip variant="sm" />
            </div>
            <div className="closing-envelope">
              <span className="envelope__card">
                <span className="envelope__heart">&hearts;</span>
                <span className="envelope__card-line" />
                <span className="envelope__card-line envelope__card-line--short" />
              </span>
              <span className="envelope__pocket" />
              <span className="envelope__crease envelope__crease--left" />
              <span className="envelope__crease envelope__crease--right" />
              <span className="envelope__flap" />
              <span className="envelope__seal" />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={560}>
          <button
            type="button"
            className="btn-reopen-envelope"
            onClick={onReopen}
          >
            <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
            Buka Kembali
          </button>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Closing