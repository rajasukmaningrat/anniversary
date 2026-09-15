import { useState } from 'react'
import './App.css'
import EnvelopeView from './components/EnvelopeView'
import MusicPlayer from './components/MusicPlayer'
import ContentView from './components/ContentView'
import { SCREENS } from './screens'

const PHASE = {
  ENVELOPE: 'envelope',
  APP: 'app',
}

function App() {
  const [phase, setPhase] = useState(PHASE.ENVELOPE)
  const [screen, setScreen] = useState(SCREENS.HOME)

  const handleOpenEnvelope = () => {
    setScreen(SCREENS.HOME)
    setPhase(PHASE.APP)
  }

  const handleReopenEnvelope = () => {
    setScreen(SCREENS.HOME)
    setPhase(PHASE.ENVELOPE)
  }

  return (
    <MusicPlayer active={phase === PHASE.APP}>
      {phase === PHASE.ENVELOPE ? (
        <EnvelopeView onOpen={handleOpenEnvelope} />
      ) : (
        <ContentView
          screen={screen}
          onNavigate={setScreen}
          onReopen={handleReopenEnvelope}
        />
      )}
    </MusicPlayer>
  )
}

export default App