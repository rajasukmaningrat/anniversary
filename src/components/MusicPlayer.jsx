import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { MusicContext, useMusic } from '../musicContext'

const MUSIC_SOURCES = [
  '/music/The%201975%20-%20About%20You%20(Official).mp3',
]
const MUSIC_VOLUME = 0.3
const MUSIC_TITLE = 'About You'
const MUSIC_ARTIST = 'The 1975'

function MusicPlayer({ active, children }) {
  const videoRef = useRef(null)
  const sourceIndexRef = useRef(0)
  const wasPlayingRef = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [looping, setLooping] = useState(true)
  const [unavailable, setUnavailable] = useState(false)

  const applyMediaSettings = useCallback(() => {
    const video = videoRef.current
    if (!video) return
    video.loop = looping
    video.volume = MUSIC_VOLUME
    video.muted = muted
  }, [looping, muted])

  const handleError = useCallback(() => {
    const nextIndex = sourceIndexRef.current + 1
    const video = videoRef.current
    if (!video) return

    if (nextIndex < MUSIC_SOURCES.length) {
      sourceIndexRef.current = nextIndex
      video.src = MUSIC_SOURCES[nextIndex]
      if (wasPlayingRef.current) {
        applyMediaSettings()
        video.play().catch(() => {
          wasPlayingRef.current = false
          setPlaying(false)
        })
      }
      return
    }

    wasPlayingRef.current = false
    setUnavailable(true)
    setPlaying(false)
  }, [applyMediaSettings])

  const togglePlay = useCallback(() => {
    if (unavailable) return
    const video = videoRef.current
    if (!video) return

    if (!video.src) {
      sourceIndexRef.current = 0
      video.src = MUSIC_SOURCES[0]
    }

    applyMediaSettings()

    if (video.paused) {
      const promise = video.play()
      wasPlayingRef.current = true
      setPlaying(true)
      if (promise && typeof promise.catch === 'function') {
        promise.catch(() => {
          wasPlayingRef.current = false
          setPlaying(false)
        })
      }
    } else {
      video.pause()
      wasPlayingRef.current = false
      setPlaying(false)
    }
  }, [applyMediaSettings, unavailable])

  const toggleMute = useCallback(() => setMuted((prev) => !prev), [])
  const toggleLoop = useCallback(() => setLooping((prev) => !prev), [])

  useEffect(() => {
    applyMediaSettings()
  }, [applyMediaSettings])

  useEffect(() => {
    if (active) return
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
    wasPlayingRef.current = false
    setPlaying(false)
  }, [active])

  useEffect(() => {
    const video = videoRef.current
    return () => {
      if (video) {
        video.pause()
        video.removeAttribute('src')
        video.load()
      }
    }
  }, [])

  const value = useMemo(() => ({
    title: MUSIC_TITLE,
    artist: MUSIC_ARTIST,
    playing,
    muted,
    looping,
    unavailable,
    togglePlay,
    toggleMute,
    toggleLoop,
  }), [playing, muted, looping, unavailable, togglePlay, toggleMute, toggleLoop])

  return (
    <MusicContext.Provider value={value}>
      <video
        ref={videoRef}
        className="app-music-media"
        preload="none"
        playsInline
        muted={muted}
        loop={looping}
        aria-hidden="true"
        tabIndex={-1}
        onError={handleError}
        onEnded={() => setPlaying(false)}
      />
      {children}
      {active && !unavailable ? <MiniMusicControls /> : null}
    </MusicContext.Provider>
  )
}

function MiniMusicControls() {
  const { playing, muted, togglePlay, toggleMute } = useMusic()

  return (
    <div className="music-control" role="group" aria-label="Kontrol musik">
      <button
        type="button"
        className="music-control__btn"
        onClick={togglePlay}
        aria-label={playing ? 'Jeda musik' : 'Putar musik'}
        aria-pressed={playing}
      >
        {playing ? (
          <Pause size={17} strokeWidth={2.4} aria-hidden="true" />
        ) : (
          <Play size={17} strokeWidth={2.4} aria-hidden="true" />
        )}
      </button>
      <button
        type="button"
        className="music-control__btn music-control__btn--mute"
        onClick={toggleMute}
        aria-label={muted ? 'Aktifkan suara' : 'Matikan suara'}
        aria-pressed={muted}
      >
        {muted ? (
          <VolumeX size={16} strokeWidth={2.4} aria-hidden="true" />
        ) : (
          <Volume2 size={16} strokeWidth={2.4} aria-hidden="true" />
        )}
      </button>
    </div>
  )
}

export default MusicPlayer
