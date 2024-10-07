import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation({
    name: 'vitehost',
    filename: 'remoteEntry.js',
    remotes: {
      viteRemote:{
        name: 'viteRemote',
        type: 'module',
        entry: 'http://localhost:4001/remoteEntry.js',
      },
      rsbuildRemote:{
        name: 'rsbuildRemote',
        entry: 'http://localhost:4002/remoteEntry.js',
      }
    },
    shared: {
      react: {
        requiredVersion: "18.3.1",
        singleton: true,
      },
      "react-dom": {
        requiredVersion: "18.3.1",
        singleton: true,
      },
    },
  }
  )],
  build: {
    target: "chrome89",
  }
})
