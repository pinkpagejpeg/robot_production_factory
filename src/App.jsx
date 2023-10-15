import React from 'react'
import './styles/App.scss'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Wallet from './components/wallet/Wallet'
import Market from './components/market/Market'
import Stock from './components/stock/Stock'
import Production from './components/production/Production'

function App() {

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Hero />
        <Wallet />
        <Market />
        <Stock />
        <Production />
      </div>
    </div>
  )
}

export default App
