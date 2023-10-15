import React, { useState, useEffect } from 'react'
import './StockSpare.scss'
import WalletStore from '../../store/WalletStore'
import BioarmStore from '../../store/BioarmStore'
import MicrochipStore from '../../store/MicrochipStore'
import SoulStore from '../../store/SoulStore'
import { observer } from 'mobx-react-lite'
import StockButton from '../UI/stockButton/StockButton';

const StockSpare = observer((props) => {
    const coins = WalletStore.coinsCount
    const bioarms = BioarmStore.bioarmsCount
    const microchips = MicrochipStore.microchipsCount
    const souls = SoulStore.soulsCount
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        if ((props.spare.quantity > 0) && !(coins > 100) && !((coins + props.spare.price) > 100)) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [coins, props.spare.quantity]);

    function handlerStockButton() {
        if (props.spare.id == 1) {
            BioarmStore.setBioarms(bioarms - 1);
        } else if (props.spare.id == 2) {
            MicrochipStore.setMicrochips(microchips - 1);
        } else {
            SoulStore.setSouls(souls - 1);
        }
        WalletStore.setCoins(coins + props.spare.price);
    }

    return (
        <div className="spare_item_wrapper">
            <h3 className="spare_item_title">{props.spare.title}</h3>
            <p className="spare_item_price">Стоимость: {props.spare.price} монет</p>
            <p className="spare_item_quantity">{props.spare.quantity} шт</p>
            <StockButton onClick={handlerStockButton} disabled={disabled}>Продать</StockButton>
        </div>
    );
})

export default StockSpare;