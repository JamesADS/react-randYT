import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import YoutubeEmbed from './YoutubeEmbed'

function randGen() {

}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <YoutubeEmbed></YoutubeEmbed>
    </>
  )
}

export default App
