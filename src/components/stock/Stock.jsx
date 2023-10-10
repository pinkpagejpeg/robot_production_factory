import React from 'react'
import './Stock.css'
import StockSpare from '../stockSpare/StockSpare'

const Stock = () => {
    return ( 
        <div className="stock_wrapper">
            <div className="stock_side">
                <span className="section_number">04</span>
            </div>
            <div className="stock_main">
                <h2 className="section_title">Склад</h2>
                <div className="stock_spares">
                    <StockSpare spare={{id: 1, title: 'Биорука', price: '7', quantity: '2'}}/>
                    <StockSpare spare={{id: 2, title: 'Микрочип', price: '5', quantity: '3'}}/>
                    <StockSpare spare={{id: 3, title: 'Душа', price: '25', quantity: '0'}}/>
                </div>
            </div>
        </div>
    );
}
 
export default Stock;