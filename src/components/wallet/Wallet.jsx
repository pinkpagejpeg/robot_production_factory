import React, { useState, useEffect } from 'react'
import './Wallet.css'
import WalletStore from '../../store/WalletStore'
import { observer } from 'mobx-react-lite'
import CoinsModal from '../UI/coinsModal/CoinsModal'

const Wallet = observer(() => {

    const coins = WalletStore.coinsCount
    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        if (coins >= 10) {
          setModalVisible(true);
        }
      }, [coins]);

    return ( 
        <>
        <div className="wallet_wrapper">
            <div className="wallet_side">
                <span className="section_number">02</span>
            </div>
            <div className="wallet_main">
                <h2 className="section_title">Кошелёк криптовалют</h2>
                <div className="wallet_money_image"></div>
                <p className="wallet_money_info"><span className="wallet_money_number">{ coins }</span> biorobo монет</p>
                <div className="wallet_loot">
                    <button className="wallet_button_loot" onClick={() => WalletStore.setCoins(coins + 1)}>Нацыганить</button>
                    <label>
                        <input className="wallet_checkbox_loot" type="checkbox"></input>
                        <span className="wallet_checkbox_info">Цыганить по 5 монет</span>
                    </label>
                </div>
            </div>
        </div>
        <CoinsModal visible={modalVisible} setVisible={setModalVisible} />
        </>
    );
})
 
export default Wallet;