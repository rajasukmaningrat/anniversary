import { Pause, Play, Repeat, Volume2, VolumeX } from 'lucide-react'
import { useMusic } from '../../musicContext'
import Tulip from '../Tulip'

function Music() {
  const {
    title,
    artist,
    playing,
    muted,
    looping,
    unavailable,
    togglePlay,
    toggleMute,
    toggleLoop,
  } = useMusic()

  if (unavailable) {
    return (
      <section className="app-screen screen--music">
        <p className="screen-label">Music</p>
        <div className="screen-music__missing">
          <p className="screen-music__title">{title}</p>
          <p className="screen-music__missing-note">
            Musik belum bisa diputar di perangkat ini. Cerita kita tetap berjalan.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="app-screen screen--music">
      <div className="screen-music__tulips" aria-hidden="true">
        <Tulip variant="xs" tilt="left" className="screen-music__tulip screen-music__tulip--tl" />
        <Tulip variant="xs" flip tilt="right" className="screen-music__tulip screen-music__tulip--br" />
      </div>

      <span className="screen-label">Music</span>

      <div
        className={`screen-music__disk${playing ? ' screen-music__disk--spin' : ''}`}
        aria-hidden="true"
      >
        <span className="screen-music__disk-ring" />
        <span className="screen-music__disk-heart">&hearts;</span>
      </div>

      <h2 className="screen-music__title">{title}</h2>
      <p className="screen-music__artist">— {artist} —</p>

      <div className="screen-music__controls" role="group" aria-label="Kontrol musik">
        <button
          type="button"
          className="screen-music__btn screen-music__btn--play"
          onClick={togglePlay}
          aria-label={playing ? 'Jeda musik' : 'Putar musik'}
          aria-pressed={playing}
        >
          {playing ? (
            <Pause size={26} strokeWidth={2.2} aria-hidden="true" />
          ) : (
            <Play size={26} strokeWidth={2.2} aria-hidden="true" />
          )}
        </button>
        <button
          type="button"
          className="screen-music__btn"
          onClick={toggleMute}
          aria-label={muted ? 'Aktifkan suara' : 'Matikan suara'}
          aria-pressed={muted}
        >
          {muted ? (
            <VolumeX size={22} strokeWidth={2.2} aria-hidden="true" />
          ) : (
            <Volume2 size={22} strokeWidth={2.2} aria-hidden="true" />
          )}
        </button>
        <button
          type="button"
          className={`screen-music__btn screen-music__btn--loop${looping ? ' screen-music__btn--loop-on' : ''}`}
          onClick={toggleLoop}
          aria-label={looping ? 'Ulangi lagu (aktif)' : 'Ulangi lagu (nonaktif)'}
          aria-pressed={looping}
        >
          <Repeat size={22} strokeWidth={2.2} aria-hidden="true" />
        </button>
      </div>

      <p className="screen-music__note">
        {playing ? 'menemani cerita kita' : 'putar untuk menemani cerita kita'}
      </p>
    </section>
  )
}

export default Music