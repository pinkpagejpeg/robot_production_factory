import React, { useState, useEffect } from 'react'
import './StockSpare.scss'
import WalletStore from '../../store/WalletStore'
import SpareStore from '../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import StockButton from '../UI/stockButton/StockButton';

const StockSpare = observer((props) => {
    const coins = WalletStore.coinsCount
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const [disabled, setDisabled] = useState(true)

    const handleStockButton = () => {
        if (props.spare.id == 1) {
            SpareStore.setBioarms(bioarms - 1);
        } else if (props.spare.id == 2) {
            SpareStore.setMicrochips(microchips - 1);
        } else {
            SpareStore.setSouls(souls - 1);
        }
        WalletStore.setCoins(coins + props.spare.price);
    }
    
    useEffect(() => {
        if ((props.spare.quantity > 0) && !(coins > 100) && !((coins + props.spare.price) > 100)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [coins, props.spare.quantity]);

    function moneyInfo(price) {
        const lastTwoDigits = price % 100;
        const lastDigit = price % 10;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'монет';
        } else if (lastDigit === 1) {
            return 'монета';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'монеты';
        } else {
            return 'монет';
        }
    }

    return (
        <div className="spare_item__wrapper">
            <h3 className="spare_item__title">{props.spare.title}</h3>
            <p className="spare_item__price">Стоимость: {props.spare.price} {moneyInfo(props.spare.price)}</p>
            <p className="spare_item__quantity">{props.spare.quantity} шт</p>
            <StockButton onClick={handleStockButton} disabled={disabled}>Продать</StockButton>
        </div>
    );
})

export default StockSpare;