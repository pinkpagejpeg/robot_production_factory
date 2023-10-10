import React from 'react'
import './StockSpare.css'
import StockButton from '../UI/stockButton/StockButton';

const StockSpare = (props) => {
    return ( 
        <div className="spare_item_wrapper">
            <h3 className="spare_item_title">{props.spare.title}</h3>
            <p className="spare_item_price">Стоимость: {props.spare.price} монет</p>
            <p className="spare_item_quantity">{props.spare.quantity} шт</p>
            <StockButton>Продать</StockButton>
        </div>
    );
}
 
export default StockSpare;