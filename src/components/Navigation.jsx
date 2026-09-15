import {
  Camera,
  Heart,
  Home,
  Mail,
  MessageCircle,
  Music,
} from 'lucide-react'
import { SCREEN_LIST } from '../screens'

const ICONS = {
  home: Home,
  heart: Heart,
  music: Music,
  camera: Camera,
  message: MessageCircle,
  mail: Mail,
}

function Navigation({ active, onNavigate }) {
  return (
    <nav className="app-nav" aria-label="Navigasi aplikasi">
      <div className="app-nav__inner">
        {SCREEN_LIST.map((item) => {
          const Icon = ICONS[item.icon] || Home
          const isActive = active === item.id
          return (
            <button
              key={item.id}
              type="button"
              className={`app-nav__item${isActive ? ' app-nav__item--active' : ''}`}
              onClick={() => onNavigate(item.id)}
              aria-current={isActive ? 'page' : undefined}
              aria-label={item.label}
            >
              <Icon size={20} strokeWidth={2.2} aria-hidden="true" />
              <span className="app-nav__label">{item.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}

export default Navigation