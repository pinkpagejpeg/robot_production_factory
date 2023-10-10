// import { useState } from 'react'
import React from 'react'
import './styles/App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
      </div>
    </div>
  )
}

export default App
