import { useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Home as HomeSection, Music as MusicSection, AboutHer, Memories, KataKata } from './sections'
import { SCREENS } from '../screens'

const SCREEN_COMPONENTS = {
  [SCREENS.HOME]: HomeSection,
  [SCREENS.MUSIC]: MusicSection,
  [SCREENS.ABOUT]: AboutHer,
  [SCREENS.MEMORIES]: Memories,
  [SCREENS.KATA]: KataKata,
}

function ContentView({ screen = SCREENS.HOME, onNavigate, onReopen }) {
  const Screen = SCREEN_COMPONENTS[screen] || HomeSection

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [screen])

  return (
    <div className="view view--app">
      <header className="app-header">
        {screen !== SCREENS.HOME && (
          <button
            type="button"
            className="app-header__back"
            onClick={() => onNavigate(SCREENS.HOME)}
            aria-label="Kembali ke Home"
          >
            <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
            <span>Kembali</span>
          </button>
        )}
        <span className="app-header__name">cantikku</span>
      </header>
      <main className="app-main">
        <div className="app-screen-wrap" key={screen}>
          <Screen onReopen={onReopen} onNavigate={onNavigate} />
        </div>
      </main>
    </div>
  )
}

export default ContentView
