import react from '@vitejs/plugin-react'
import { readdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const PROJECT_ROOT = fileURLToPath(new URL('.', import.meta.url))
const IMAGE_EXT = /\.(jpe?g|png|webp|gif|avif)$/i

const GALLERIES = {
  ayu: 'public/images/ayu',
  together: 'public/images/together',
  memories: 'public/images/memories',
}

const VIRTUAL_MEDIA_ID = 'virtual:cayang-media'
const RESOLVED_MEDIA_ID = '\0' + VIRTUAL_MEDIA_ID
const MEDIA_COLLECTIONS = Object.create(null)

function scanDirectory(dir) {
  const absoluteDir = resolve(PROJECT_ROOT, dir)
  let names
  try {
    names = readdirSync(absoluteDir)
  } catch {
    names = []
  }
  const routePrefix = dir.replace(/^public\//, '')
  return names
    .filter((name) => IMAGE_EXT.test(name))
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
        MEDIA_COLLECTIONS.ayu || scanDirectory(GALLERIES.ayu)
      MEDIA_COLLECTIONS.together =
        MEDIA_COLLECTIONS.together || scanDirectory(GALLERIES.together)
      MEDIA_COLLECTIONS.memories =
        MEDIA_COLLECTIONS.memories || scanDirectory(GALLERIES.memories)

      return [
        `export const AYU_IMAGES = ${JSON.stringify(MEDIA_COLLECTIONS.ayu)}`,
        `export const TOGETHER_IMAGES = ${JSON.stringify(MEDIA_COLLECTIONS.together)}`,
        `export const MEMORIES_IMAGES = ${JSON.stringify(MEDIA_COLLECTIONS.memories)}`,
      ].join('\n')
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), cayangMediaPlugin()],
})