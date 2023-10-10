import React from 'react'
import './Wallet.css'

const Wallet = () => {
    return ( 
        <div className="wallet_wrapper">
            <div className="wallet_side">
                <span className="section_number">02</span>
            </div>
            <div className="wallet_main">
                <h2 className="section_title">Кошелёк криптовалют</h2>
                <div className="wallet_money_image"></div>
                <p className="wallet_money_info"><span className="wallet_money_number">0</span> biorobo монет</p>
                <div className="wallet_loot">
                    <a className="wallet_button_loot" href="#">Нацыганить</a>
                    <label>
                        <input className="wallet_checkbox_loot" type="checkbox"></input>
                        <span className="wallet_checkbox_info">Цыганить по 5 монет</span>
                    </label>
                </div>
            </div>
        </div>
    );
}
 
export default Wallet;