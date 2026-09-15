import { ChevronLeft } from 'lucide-react'
import Navigation from './Navigation'
import { Opening, Music, AboutHer, Memories, KataKata, Close } from './sections'
import { SCREENS } from '../screens'

const SCREEN_COMPONENTS = {
  [SCREENS.HOME]: Opening,
  [SCREENS.MUSIC]: Music,
  [SCREENS.ABOUT]: AboutHer,
  [SCREENS.MEMORIES]: Memories,
  [SCREENS.KATA]: KataKata,
  [SCREENS.CLOSE]: Close,
}

function ContentView({ screen = SCREENS.HOME, onNavigate, onReopen }) {
  const Screen = SCREEN_COMPONENTS[screen] || Opening

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
            <ChevronLeft size={20} strokeWidth={2.2} aria-hidden="true" />
          </button>
        )}
        <span className="app-header__name">cayang</span>
      </header>
      <main className="app-main">
        <div className="app-screen-wrap" key={screen}>
          <Screen onReopen={onReopen} onNavigate={onNavigate} />
        </div>
      </main>
      <Navigation active={screen} onNavigate={onNavigate} />
    </div>
  )
}

export default ContentView