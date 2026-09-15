import { Mail } from 'lucide-react'
import Tulip from '../Tulip'

function Close({ onReopen }) {
  return (
    <section className="app-screen screen--close">
      <div className="screen-close__tulips" aria-hidden="true">
        <Tulip variant="xs" tilt="left" className="screen-close__tulip screen-close__tulip--tl" />
        <Tulip variant="xs" flip tilt="right" className="screen-close__tulip screen-close__tulip--br" />
      </div>

      <p className="screen-close__label">Untuk satu tahun kita</p>

      <h2 className="screen-close__title">
        Terima kasih sudah sampai di sini bersamaku.
      </h2>

      <p className="screen-close__text">
        Semoga setelah ini masih ada banyak cerita
        <br />
        yang bisa kita tulis bersama.
      </p>

      <p className="screen-close__final">Happy Anniversary, Cayang. &hearts;</p>

      <div className="screen-close__envelope-scene" aria-hidden="true">
        <div className="screen-close__envelope-tulip">
          <Tulip variant="sm" />
        </div>
        <div className="screen-close__envelope">
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

      <button type="button" className="btn-reopen-envelope" onClick={onReopen}>
        <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
        Buka Kembali
      </button>
    </section>
  )
}

export default Close