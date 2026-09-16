import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const PROJECT_ROOT = fileURLToPath(new URL('.', import.meta.url))
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i
const VIDEO_EXT = /\.(mp4|webm|ogg|mov)$/i

const GALLERIES = {
  ayu: 'public/asset/ayu',
  memories: 'public/asset/memories',
}

const VIRTUAL_MEDIA_ID = 'virtual:cayang-media'
const RESOLVED_MEDIA_ID = '\0' + VIRTUAL_MEDIA_ID
const MEDIA_COLLECTIONS = Object.create(null)

function scanDirectory(dir, matcher) {
  const absoluteDir = resolve(PROJECT_ROOT, dir)
  let names
  try {
    names = readdirSync(absoluteDir)
  } catch {
    names = []
  }
  const routePrefix = dir.replace(/^public\//, '')
  return names
    .filter((name) => matcher.test(name))
    .sort((a, b) =>
      a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
    )
    .map((name) => `/${routePrefix}/${name}`)
}

function cayangMediaPlugin() {
  return {
    name: 'cayang-media',
    enforce: 'pre',
    resolveId(id) {
      if (id === VIRTUAL_MEDIA_ID) return RESOLVED_MEDIA_ID
    },
    load(id) {
      if (id !== RESOLVED_MEDIA_ID) return

      MEDIA_COLLECTIONS.ayu =
        MEDIA_COLLECTIONS.ayu || scanDirectory(GALLERIES.ayu, IMAGE_EXT)
      MEDIA_COLLECTIONS.memories =
        MEDIA_COLLECTIONS.memories || scanDirectory(GALLERIES.memories, IMAGE_EXT)
      MEDIA_COLLECTIONS.memoryVideos =
        MEDIA_COLLECTIONS.memoryVideos || scanDirectory(GALLERIES.memories, VIDEO_EXT)

      return [
        `export const AYU_IMAGES = ${JSON.stringify(MEDIA_COLLECTIONS.ayu)}`,
        `export const MEMORIES_IMAGES = ${JSON.stringify(MEDIA_COLLECTIONS.memories)}`,
        `export const MEMORY_VIDEOS = ${JSON.stringify(MEDIA_COLLECTIONS.memoryVideos)}`,
      ].join('\n')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cayangMediaPlugin()],
})