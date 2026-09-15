import { useEffect } from 'react'
import { ChevronLeft, Home, Heart, Music, Camera, MessageCircle } from 'lucide-react'
import { Home as HomeSection, Music as MusicSection, AboutHer, Memories, KataKata } from './sections'
import { SCREENS } from '../screens'

const SCREEN_COMPONENTS = {
  [SCREENS.HOME]: HomeSection,
  [SCREENS.MUSIC]: MusicSection,
  [SCREENS.ABOUT]: AboutHer,
  [SCREENS.MEMORIES]: Memories,
  [SCREENS.KATA]: KataKata,
}

const NAV_ITEMS = [
  { id: SCREENS.HOME, label: 'Home', icon: Home },
  { id: SCREENS.ABOUT, label: 'About', icon: Heart },
  { id: SCREENS.MUSIC, label: 'Music', icon: Music },
  { id: SCREENS.MEMORIES, label: 'Memories', icon: Camera },
  { id: SCREENS.KATA, label: 'Kata', icon: MessageCircle },
]

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
        <span className="app-header__name">cayang</span>
      </header>
      <main className="app-main">
        <div className="app-screen-wrap" key={screen}>
          <Screen onReopen={onReopen} onNavigate={onNavigate} />
        </div>
      </main>
      <nav className="app-bottom-nav" aria-label="Navigasi aplikasi">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              type="button"
              className={`app-bottom-nav__btn${screen === item.id ? ' app-bottom-nav__btn--active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
            >
              <Icon size={20} strokeWidth={2} aria-hidden="true" />
              <span className="app-bottom-nav__label">{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default ContentView
