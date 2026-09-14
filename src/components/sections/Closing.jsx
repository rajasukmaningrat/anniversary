import { Mail } from 'lucide-react'
import Tulip from '../Tulip'

function Closing({ onReachClosing }) {
  return (
    <section className="content-section content-section--closing">
      <div className="section-tulips" aria-hidden="true">
        <Tulip variant="sm" flip className="section-tulips__left" />
        <Tulip variant="sm" tilt="left" className="section-tulips__right" />
      </div>
      <div className="container">
        <h2>Closing</h2>
        <p>Placeholder: Pesan penutup.</p>
        <button
          type="button"
          className="btn-close-envelope"
          onClick={onReachClosing}
        >
          <Mail size={18} strokeWidth={2.2} aria-hidden="true" />
          Tutup Amplop
        </button>
      </div>
    </section>
  )
}

export default Closing
