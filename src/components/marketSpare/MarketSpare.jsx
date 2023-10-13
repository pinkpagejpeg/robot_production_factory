import React, { useState, useEffect } from 'react'
import './MarketSpare.css'
import WalletStore from '../../store/WalletStore'
import BioarmStore from '../../store/BioarmStore'
import MicrochipStore from '../../store/MicrochipStore'
import SoulStore from '../../store/SoulStore'
import { observer } from 'mobx-react-lite'
import MarketButton from '../UI/marketButton/MarketButton';

const MarketSpare = observer((props) => {
    const coins = WalletStore.coinsCount
    const bioarms = BioarmStore.bioarmsCount
    const microchips = MicrochipStore.microchipsCount
    const souls = SoulStore.soulsCount
    const [disabled, setDisabled] = useState(true)
    

    useEffect(() => {
        if (coins >= props.spare.price) {
          setDisabled(false);
        } else {
            setDisabled(true);
        }
      }, [coins]);

    function handlerMarketButton () {
        if(props.spare.id == 1) {
            BioarmStore.setBioarms(bioarms + 1);
        } else if (props.spare.id == 2) {
            MicrochipStore.setMicrochips(microchips + 1);
        } else {
            SoulStore.setSouls(souls + 1);
        }
        WalletStore.setCoins(coins - props.spare.price);
        setDisabled(true);
    }

    return (
        <div className="spare_item_wrapper">
            <div className="spare_item_image_wrapper">
                <img className="spare_item_image" src={props.spare.image} />
            </div>
            <h3 className="spare_item_title">{props.spare.title}</h3>
            <p className="spare_item_price">Стоимость: {props.spare.price} монет</p>
            <MarketButton onClick={handlerMarketButton} disabled={disabled}>Установить</MarketButton>
        </div>
    );
})

export default MarketSpare;