import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'
import './app.css'
import { BrowserRouter } from 'react-router-dom'
import Router from './routers/router'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Router/>
    </BrowserRouter>
  )
}
