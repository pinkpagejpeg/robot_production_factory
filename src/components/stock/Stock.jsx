import React from 'react'
import './Stock.css'
import WalletStore from '../../store/WalletStore'
import BioarmStore from '../../store/BioarmStore'
import MicrochipStore from '../../store/MicrochipStore'
import SoulStore from '../../store/SoulStore'
import { observer } from 'mobx-react-lite'
import StockSpare from '../stockSpare/StockSpare'

const Stock = observer(() => {
    const coins = WalletStore.coinsCount
    const bioarms = BioarmStore.bioarmsCount
    const microchips = MicrochipStore.microchipsCount
    const souls = SoulStore.soulsCount

    return ( 
        <div className="stock_wrapper">
            <div className="stock_side">
                <span className="section_number">04</span>
            </div>
            <div className="stock_main">
                <h2 className="section_title">Склад</h2>
                <div className="stock_spares">
                    <StockSpare spare={{id: 1, title: 'Биорука', price: 5, quantity: bioarms}}/>
                    <StockSpare spare={{id: 2, title: 'Микрочип', price: 3, quantity: microchips}}/>
                    <StockSpare spare={{id: 3, title: 'Душа', price: 15, quantity: souls}}/>
                </div>
            </div>
        </div>
    );
})
 
export default Stock;