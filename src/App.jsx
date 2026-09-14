import { useState } from 'react'
import './App.css'
import EnvelopeView from './components/EnvelopeView'
import ContentView from './components/ContentView'
import ClosingView from './components/ClosingView'

const PHASE = {
  ENVELOPE: 'envelope',
  CONTENT: 'content',
  CLOSING: 'closing',
}

function App() {
  const [phase, setPhase] = useState(PHASE.ENVELOPE)

  const handleOpenEnvelope = () => setPhase(PHASE.CONTENT)
  const handleReopenEnvelope = () => setPhase(PHASE.ENVELOPE)

  if (phase === PHASE.ENVELOPE) {
    return <EnvelopeView onOpen={handleOpenEnvelope} />
  }

  if (phase === PHASE.CONTENT) {
    return <ContentView onReopen={handleReopenEnvelope} />
  }

  if (phase === PHASE.CLOSING) {
    return <ClosingView onReopen={handleReopenEnvelope} />
  }

  return null
}

export default App
