import { useState } from 'react'
import './App.css'
import Terminal from './components/Terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main id='background' className='center'>
      <Terminal />
      </main>
  )
}

export default App
