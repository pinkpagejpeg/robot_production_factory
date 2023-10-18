import React, { useState, useEffect } from 'react'
import './Wallet.scss'
import WalletStore from '../../store/WalletStore'
import { observer } from 'mobx-react-lite'
import CoinsModal from '../UI/coinsModal/CoinsModal'
import coinsIcon from './../../assets/images/coins.png'

const Wallet = observer(() => {

    const coins = WalletStore.coinsCount
    const [modalVisible, setModalVisible] = useState(false)
    const [checked, setChecked] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const handleClickButtonLoot = () => {
        if (!checked) {
            WalletStore.setCoins(coins + 1);
        } else {
            WalletStore.setCoins(coins + 5);
        }
    }

    const handleClickCheckbox = () => {
        setChecked(!checked);
    }

    useEffect(() => {
        if (coins >= 100) {
            setModalVisible(true);
            setDisabled(true);
        } else {
            setDisabled(false);
        }
    }, [coins]);

    function moneyInfo(coins) {
        const lastTwoDigits = coins % 100;
        const lastDigit = coins % 10;

        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            return 'biorobo монет';
        } else if (lastDigit === 1) {
            return 'biorobo монета';
        } else if (lastDigit >= 2 && lastDigit <= 4) {
            return 'biorobo монеты';
        } else {
            return 'biorobo монет';
        }
    }


    return (
        <>
            <div className="wallet__wrapper">
                <div className="wallet__side">
                    <span className="section_number">02</span>
                </div>
                <div className="wallet__main">
                    <h2 className="section_title">Кошелёк криптовалют</h2>
                    <div className="wallet__money_image">
                        {Array.from({ length: coins }).map((coinsItem, index) => (
                            <img key={index} src={coinsIcon} alt="Coins icon" className="wallet__coins_image" style={{ zIndex: 100 - index }} />
                        ))}
                    </div>
                    <p className="wallet__money_info"><span className="wallet__money_number">{coins}</span> {moneyInfo(coins)}</p>
                    <div className="wallet__loot">
                        <button className="wallet__button_loot" onClick={handleClickButtonLoot} disabled={disabled}>Нацыганить</button>
                        <label>
                            <input className="wallet__checkbox_loot" type="checkbox" checked={checked} onClick={handleClickCheckbox}></input>
                            <span className="wallet__checkbox_info">Цыганить по 5 монет</span>
                        </label>
                    </div>
                </div>
            </div>
            <CoinsModal visible={modalVisible} setVisible={setModalVisible} />
        </>
    );
})

export default Wallet;