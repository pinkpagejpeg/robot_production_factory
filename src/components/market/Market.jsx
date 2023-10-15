import React from 'react'
import './Market.scss'
import MarketSpare from '../marketSpare/MarketSpare'
import bioarm from './../../assets/images/bioarm.svg'
import microchip from './../../assets/images/microchip.svg'
import soul from './../../assets/images/soul.svg'

const Market = () => {

    return (
        <div className="market_wrapper">
            <div className="market_side">
                <span className="section_number">03</span>
            </div>
            <div className="market_main">
                <h2 className="section_title">Рынок комплектующих</h2>
                <div className="market_spares">
                    <MarketSpare spare={{ id: 1, image: bioarm, title: 'Биорука', price: 7 }} />
                    <MarketSpare spare={{ id: 2, image: microchip, title: 'Микрочип', price: 5 }} />
                    <MarketSpare spare={{ id: 3, image: soul, title: 'Душа', price: 25 }} />
                </div>
            </div>
        </div>
    );
}

export default Market;