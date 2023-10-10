import React from 'react'
import './MarketSpare.css'
import MarketButton from '../UI/marketButton/MarketButton';

const MarketSpare = (props) => {
    return ( 
        <div className="spare_item_wrapper">
            <div className="spare_item_image_wrapper">
                <img className="spare_item_image" src={props.spare.image}/>
            </div>
            <h3 className="spare_item_title">{props.spare.title}</h3>
            <p className="spare_item_price">Стоимость: {props.spare.price} монет</p>
            <MarketButton>Установить</MarketButton>
        </div>
    );
}
 
export default MarketSpare;