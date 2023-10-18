import React from 'react'
import './Stock.scss'
import SpareStore from '../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import StockSpare from '../stockSpare/StockSpare'

const Stock = observer(() => {

    return (
        <div className="stock__wrapper">
            <div className="stock__side">
                <span className="section_number">04</span>
            </div>
            <div className="stock__main">
                <h2 className="section_title">Склад</h2>
                <div className="stock__spares">
                    <StockSpare spare={{ 
                        id: 1, 
                        title: SpareStore.bioarms.name, 
                        price: SpareStore.bioarms.sellPrice, 
                        quantity: SpareStore.bioarms.currentCount 
                        }} />
                    <StockSpare spare={{ 
                        id: 2, 
                        title: SpareStore.microchips.name, 
                        price: SpareStore.microchips.sellPrice, 
                        quantity: SpareStore.microchips.currentCount 
                        }} />
                    <StockSpare spare={{ 
                        id: 3, 
                        title: SpareStore.souls.name, 
                        price: SpareStore.souls.sellPrice, 
                        quantity: SpareStore.souls.currentCount 
                        }} />
                </div>
            </div>
        </div>
    );
})

export default Stock;