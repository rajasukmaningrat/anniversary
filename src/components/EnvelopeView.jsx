import { useCallback, useEffect, useRef, useState } from 'react'
import Tulip from './Tulip'

const OPEN_ANIMATION_MS = 700

function EnvelopeView({ onOpen }) {
  const [isOpen, setIsOpen] = useState(false)
  const openTimerRef = useRef(null)

  useEffect(() => {
    return () => clearTimeout(openTimerRef.current)
  }, [])

  const handleOpen = useCallback(() => {
    if (isOpen) return

    setIsOpen(true)
    openTimerRef.current = setTimeout(onOpen, OPEN_ANIMATION_MS)
  }, [isOpen, onOpen])

  return (
    <div className="view view--envelope">
      <div className="envelope-corners" aria-hidden="true">
        <div className="tulip-bunch tulip-bunch--bl">
          <Tulip variant="lg" className="tulip-bunch__t1" />
          <Tulip variant="sm" flip className="tulip-bunch__t2" />
          <Tulip variant="md" flip tilt="right" className="tulip-bunch__t3" />
          <Tulip variant="sm" tilt="left" className="tulip-bunch__t4" />
        </div>
        <div className="tulip-bunch tulip-bunch--tr">
          <Tulip variant="xs" tilt="right" className="tulip-bunch__t1" />
          <Tulip variant="sm" flip className="tulip-bunch__t2" />
        </div>
        <div className="tulip-bunch tulip-bunch--br">
          <Tulip variant="sm" flip className="tulip-bunch__t1" />
          <Tulip variant="md" tilt="left" className="tulip-bunch__t2" />
        </div>
      </div>

      <div className="container envelope-stage">
        <p className="envelope-eyebrow">Happy Anniversary</p>
        <h1 className="envelope-title">CANTIKKU</h1>

        <button
          type="button"
          className="envelope-btn"
          onClick={handleOpen}
          aria-label="Buka amplop perayaan satu tahun bersama"
          aria-expanded={isOpen}
          disabled={isOpen}
        >
          <span
            className={`envelope${isOpen ? ' envelope--open' : ''}`}
            aria-hidden="true"
          >
            <span className="envelope__card">
              <span className="envelope__heart" aria-hidden="true">
                &hearts;
              </span>
              <span className="envelope__card-line" aria-hidden="true" />
              <span className="envelope__card-line envelope__card-line--short" aria-hidden="true" />
            </span>
            <span className="envelope__pocket" aria-hidden="true" />
            <span className="envelope__crease envelope__crease--left" aria-hidden="true" />
            <span className="envelope__crease envelope__crease--right" aria-hidden="true" />
            <span className="envelope__flap" aria-hidden="true" />
            <span className="envelope__seal" aria-hidden="true" />
          </span>
          <span className="envelope-hint" aria-hidden="true">
            {isOpen ? 'Membuka…' : 'Ketuk untuk membuka'}
          </span>
        </button>
      </div>
    </div>
  )
}

export default EnvelopeView