import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name: 'viteRemote',
      filename: 'remoteEntry.js',
      exposes: {
        "./App": "./src/App",
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
    }),
  ],
  server: {
    port: 4001,
  },
  build: {
    target: "chrome89",
  }
})
