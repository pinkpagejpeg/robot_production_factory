import React, { useState, useEffect } from 'react'
import './MarketSpare.scss'
import WalletStore from '../../store/WalletStore'
import SpareStore from '../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import MarketButton from '../UI/marketButton/MarketButton';

const MarketSpare = observer((props) => {
    const coins = WalletStore.coinsCount
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const [disabled, setDisabled] = useState(true)

    const handlerMarketButton = () => {
        if (props.spare.id == 1) {
            SpareStore.setBioarms(bioarms + 1);
        } else if (props.spare.id == 2) {
            SpareStore.setMicrochips(microchips + 1);
        } else {
            SpareStore.setSouls(souls + 1);
        }
        WalletStore.setCoins(coins - props.spare.price);
        setDisabled(true);
    }

    useEffect(() => {
        if (coins >= props.spare.price) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [coins]);

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
            <div className="spare_item__image_wrapper">
                <img className="spare_item__image" src={props.spare.image} />
            </div>
            <h3 className="spare_item__title">{props.spare.title}</h3>
            <p className="spare_item__price">Стоимость: {props.spare.price} {moneyInfo(props.spare.price)}</p>
            <MarketButton onClick={handlerMarketButton} disabled={disabled}>Установить</MarketButton>
        </div>
    );
})

export default MarketSpare;