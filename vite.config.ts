import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import { resolve } from 'path'

const ENV_PREFIX = 'REACT_APP_'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, 'env', ENV_PREFIX)
  return {
    plugins: [react(), svgr()],
    server: {
      port: 3000,
      open: env.SERVER_OPEN_BROWSER === 'true',
    },
    resolve: {
      alias: {
        '@assets': resolve(__dirname, './assets'),
      },
    },
  }
})
