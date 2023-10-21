import React from 'react'
import classes from './ProductionModal.module.scss'
import close from './../../../assets/images/close.svg'

const ProductionModal = ({ visible, setVisible }) => {

    const rootClasses = [classes.productionModal]
    if (visible) {
        rootClasses.push(classes.active)
    }

    const handleCloseModal = () => {
        setVisible(false)
    }

    return (
        <div className={rootClasses.join(' ')}>
            <div className={classes.production__modal_content}>
                <div className={classes.production__close_wrapper}>
                    <button className={classes.button_close} onClick={handleCloseModal}><img src={close} alt="Close" /></button>
                </div>
                <div className={classes.production__info}>
                    <div className={classes.production__message}>
                        <h2 className={classes.modal_title}>Биоробот произведён</h2>
                        <p className={classes.modal_text}>Поздравляем! Вы произвели биоробота</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductionModal;