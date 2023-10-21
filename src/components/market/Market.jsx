import React from 'react'
import './Market.scss'
import SpareStore from '../../store/SpareStore'
import MarketSpare from '../marketSpare/MarketSpare'
import bioarm from './../../assets/images/bioarm.svg'
import microchip from './../../assets/images/microchip.svg'
import soul from './../../assets/images/soul.svg'

const Market = () => {
    return (
        <div className="market__wrapper">
            <div className="market__side">
                <span className="section_number">03</span>
            </div>
            <div className="market__main">
                <h2 className="section_title">Рынок комплектующих</h2>
                <div className="market__spares">
                    <MarketSpare spare={{ 
                        id: 1, 
                        image: bioarm, 
                        title: SpareStore.bioarms.name, 
                        price: SpareStore.bioarms.buyPrice 
                        }} />
                    <MarketSpare spare={{ 
                        id: 2, 
                        image: microchip, 
                        title: SpareStore.microchips.name, 
                        price: SpareStore.microchips.buyPrice 
                        }} />
                    <MarketSpare spare={{ 
                        id: 3, 
                        image: soul, 
                        title: SpareStore.souls.name, 
                        price: SpareStore.souls.buyPrice 
                        }} />
                </div>
            </div>
        </div>
    );
}

export default Market;