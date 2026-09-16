import {
  Camera,
  ChevronRight,
  Heart,
  Mail,
  MessageCircle,
  Music,
} from 'lucide-react'
import MediaPhoto from '../MediaPhoto'
import Tulip from '../Tulip'
import { SCREENS } from '../../screens'
import { AYU_IMAGES } from 'virtual:cayang-media'

const HERO_PHOTO =
  AYU_IMAGES.find((src) => src.includes('ayu-opening')) ||
  AYU_IMAGES[0] ||
  '/asset/opening/ayu-opening.jpg'

const MENU = [
  {
    id: SCREENS.ABOUT,
    label: 'About Her',
    caption: 'siapah sih cicis ni?',
    icon: Heart,
  },
  {
    id: SCREENS.MUSIC,
    label: 'Music',
    caption: 'lagu nya bagus hehe',
    icon: Music,
  },
  {
    id: SCREENS.MEMORIES,
    label: 'Memories',
    caption: 'sedikit kenang kenangan',
    icon: Camera,
  },
  {
    id: SCREENS.KATA,
    label: 'Kata-kata hari ini',
    caption: 'mode serius ni yee',
    icon: MessageCircle,
  },
]

function Home({ onReopen, onNavigate }) {
  return (
    <section className="app-screen screen--home">
      <div className="screen-home__tulips" aria-hidden="true">
        <Tulip variant="sm" tilt="left" className="screen-home__tulip screen-home__tulip--bl" />
        <Tulip variant="sm" flip tilt="right" className="screen-home__tulip screen-home__tulip--br" />
      </div>

      <div className="screen-home">
        <p className="screen-home__eyebrow">Plincess Ceces</p>

        <div className="screen-home__photo-wrap">
          <MediaPhoto
            className="screen-home__photo"
            src="/images/opening/ayu-opening.jpg"
            alt="Foto Syarifah Ayu Bilqis"
            mark="A"
          />
          <span className="screen-home__photo-stamp" aria-hidden="true">
            &hearts;
          </span>
        </div>

        <h1 className="screen-home__title">Happy Anniversary</h1>
        <p className="screen-home__subtitle">1 Tahun ni Ayy</p>
        <p className="screen-home__message">
          Setahun berlalu, dan aku masih memilih kamu di setiap harinya. CIELAH
        </p>
      </div>

      <nav className="screen-home__menu" aria-label="Menu aplikasi perayaan">
        {MENU.map((item) => {
          const Icon = item.icon
          return (
            <button
              key={item.id}
              type="button"
              className="screen-home__menu-item"
              onClick={() => onNavigate(item.id)}
              aria-label={item.label}
            >
              <span className="screen-home__menu-icon" aria-hidden="true">
                <Icon size={20} strokeWidth={2.2} />
              </span>
              <span className="screen-home__menu-body">
                <span className="screen-home__menu-label">{item.label}</span>
                <span className="screen-home__menu-caption">{item.caption}</span>
              </span>
              <ChevronRight
                className="screen-home__menu-chev"
                size={18}
                strokeWidth={2.2}
                aria-hidden="true"
              />
            </button>
          )
        })}
      </nav>

      <button
        type="button"
        className="screen-home__close"
        onClick={onReopen}
        aria-label="Tutup aplikasi dan kembali ke amplop"
      >
        <Mail size={16} strokeWidth={2.2} aria-hidden="true" />
        Tutup dan kembali ke Laptop
      </button>
    </section>
  )
}

export default Home
