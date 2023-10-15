import React from 'react'
import classes from './CoinsModal.module.scss'
import close from './../../../assets/images/close.svg'
import coins from './../../../assets/images/coins.png'

const CoinsModal = ({ visible, setVisible }) => {

    const rootClasses = [classes.coinsModal]
    if (visible) {
        rootClasses.push(classes.active);
    }

    const handleCloseModal = () => {
        setVisible(false);
    };

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.coins_modal_content}>
                <div className={classes.coins_close_wrapper}>
                    <button className={classes.button_close} onClick={handleCloseModal}><img src={close} alt="Close" /></button>
                </div>
                <div className={classes.coins_info}>
                    <img className={classes.coins_image} src={coins} alt="Coins" />
                    <div className={classes.coins_message}>
                        <h2 className={classes.modal_title}>Количество монет ограничено</h2>
                        <p className={classes.modal_text}>Вы не можете нацыганить более 100 монет biorobo</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoinsModal;