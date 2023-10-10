// import { useState } from 'react'
import React from 'react'
import './styles/App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Wallet from './components/wallet/Wallet'
import Market from './components/market/Market'
import Stock from './components/stock/Stock'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Wallet />
        <Market />
        <Stock />
      </div>
    </div>
  )
}

export default App
