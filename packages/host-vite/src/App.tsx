/* eslint-disable @typescript-eslint/ban-ts-comment */
import { lazy, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//@ts-expect-error
const RemoteVite = lazy(() => import('viteRemote/App'))

//@ts-expect-error
const RemoteRsbuild = lazy(() => import('rsbuildRemote/App'))

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite Host + React</h1>

      <Suspense>
        <RemoteVite />
      </Suspense>
    
      <Suspense>
        <RemoteRsbuild />
      </Suspense>
    </>
  )
}

export default App
