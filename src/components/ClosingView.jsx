import { RotateCcw } from 'lucide-react'
import Tulip from './Tulip'

function ClosingView({ onReopen }) {
  return (
    <div className="view view--closing">
      <div className="closing-tulips" aria-hidden="true">
        <Tulip variant="sm" tilt="left" className="closing-tulips__bl" />
        <Tulip variant="sm" flip className="closing-tulips__br" />
        <Tulip variant="xs" className="closing-tulips__tl" />
        <Tulip variant="xs" flip tilt="left" className="closing-tulips__tr" />
        <div className="tulip-bunch tulip-bunch--focal">
          <Tulip variant="sm" tilt="left" className="tulip-bunch__t1" />
          <Tulip variant="sm" flip tilt="right" className="tulip-bunch__t2" />
        </div>
      </div>
      <div className="container closing-content">
        <h1>Selamat Anniversary</h1>
        <p>Terima kasih sudah menjadi bagian dari cerita ini.</p>
        <button
          type="button"
          className="btn-reopen-envelope"
          onClick={onReopen}
        >
          <RotateCcw size={18} strokeWidth={2.2} aria-hidden="true" />
          Buka Kembali
        </button>
      </div>
    </div>
  )
}

export default ClosingView
