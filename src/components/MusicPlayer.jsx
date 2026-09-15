import { useCallback, useEffect, useRef, useState } from 'react'
import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { MusicContext, useMusic } from '../musicContext'

const MUSIC_SOURCES = [
  '/music/TULUS%20-%20Jatuh%20Suka%20(Official%20Lyric%20Video).mp4',
  '/music/Tulus_-_Jatuh_Suka_(mp3.pm).mp3',
]
const MUSIC_VOLUME = 0.3
const STOP_FADE_MS = 600
const MUSIC_TITLE = 'Jatuh Suka'
const MUSIC_ARTIST = 'Tulus'

function MusicPlayer({ active, children }) {
  const audioRef = useRef(null)
  const sourceIndexRef = useRef(0)
  const mutedRef = useRef(false)
  const fadeTimerRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [unavailable, setUnavailable] = useState(false)

  const handlePlaybackError = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return

    const nextIndex = sourceIndexRef.current + 1
    if (nextIndex < MUSIC_SOURCES.length) {
      sourceIndexRef.current = nextIndex
      audio.src = MUSIC_SOURCES[nextIndex]
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false))
      return
    }

    setIsPlaying(false)
    setUnavailable(true)
  }, [])

  const getAudio = useCallback(() => {
    if (!audioRef.current) {
      const audio = new Audio()
      audio.loop = true
      audio.preload = 'none'
      audio.volume = MUSIC_VOLUME
      audio.muted = mutedRef.current
      audio.addEventListener('error', handlePlaybackError)
      audioRef.current = audio
    }
    return audioRef.current
  }, [handlePlaybackError])

  const start = useCallback(() => {
    if (unavailable) return

    const audio = getAudio()
    if (!audio) return

    if (!audio.src) {
      sourceIndexRef.current = 0
      audio.src = MUSIC_SOURCES[0]
    }

    audio.loop = true
    audio.volume = MUSIC_VOLUME
    audio.muted = mutedRef.current

    setIsPlaying(true)
    audio.play().catch(() => setIsPlaying(false))
  }, [getAudio, unavailable])

  const stop = useCallback(() => {
    const audio = audioRef.current
    if (!audio || audio.paused) {
      setIsPlaying(false)
      return
    }

    clearTimeout(fadeTimerRef.current)
    const startVolume = audio.volume
    const steps = 8
    let stepIndex = 0

    const fadeStep = () => {
      stepIndex += 1
      audio.volume = startVolume * (1 - stepIndex / steps)

      if (stepIndex < steps) {
        fadeTimerRef.current = setTimeout(fadeStep, STOP_FADE_MS / steps)
        return
      }

      audio.pause()
      audio.currentTime = 0
      audio.volume = MUSIC_VOLUME
      setIsPlaying(false)
    }

    fadeStep()
  }, [])

  const togglePlay = useCallback(() => {
    const audio = getAudio()
    if (!audio) return

    if (audio.paused) {
      if (!audio.src) {
        sourceIndexRef.current = 0
        audio.src = MUSIC_SOURCES[0]
      }
      audio.muted = mutedRef.current
      audio.volume = MUSIC_VOLUME
      setIsPlaying(true)
      audio.play().catch(() => setIsPlaying(false))
      return
    }

    audio.pause()
    setIsPlaying(false)
  }, [getAudio])

  const toggleMute = useCallback(() => {
    mutedRef.current = !mutedRef.current
    const audio = audioRef.current
    if (audio) audio.muted = mutedRef.current
    setIsMuted(mutedRef.current)
  }, [])

  useEffect(() => {
    if (!active) {
      stop()
      return
    }

    const audio = audioRef.current
    if (audio && !audio.paused) return
    start()
  }, [active, start, stop])

  useEffect(() => {
    return () => {
      clearTimeout(fadeTimerRef.current)
      const audio = audioRef.current
      if (audio) {
        audio.pause()
        audio.removeEventListener('error', handlePlaybackError)
      }
    }
  }, [handlePlaybackError])

  const value = {
    title: MUSIC_TITLE,
    artist: MUSIC_ARTIST,
    playing: isPlaying,
    muted: isMuted,
    unavailable,
    togglePlay,
    toggleMute,
  }

  return (
    <MusicContext.Provider value={value}>
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