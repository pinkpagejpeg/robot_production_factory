import React from 'react'
import classes from './Market.module.scss'
import SpareStore from '../../store/SpareStore'
import MarketSpare from './components/marketSpare/MarketSpare'

const Market = () => {
    return (
        <div className={classes.market__wrapper}>
            <div className={classes.market__side}>
                <span className={classes.section_number}>03</span>
            </div>
            <div className={classes.market__main}>
                <h2 className={classes.section_title}>Рынок комплектующих</h2>
                <div className={classes.market__spares}>
                    <MarketSpare spare={{ 
                        id: 1, 
                        image: SpareStore.bioarms.image, 
                        title: SpareStore.bioarms.name, 
                        price: SpareStore.bioarms.buyPrice 
                        }} />
                    <MarketSpare spare={{ 
                        id: 2, 
                        image: SpareStore.microchips.image, 
                        title: SpareStore.microchips.name, 
                        price: SpareStore.microchips.buyPrice 
                        }} />
                    <MarketSpare spare={{ 
                        id: 3, 
                        image: SpareStore.souls.image, 
                        title: SpareStore.souls.name, 
                        price: SpareStore.souls.buyPrice 
                        }} />
                </div>
            </div>
        </div>
    );
}

export default Market;