import React from 'react'
import classes from './StockButton.module.scss'

const StockButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.stock__btn}>{children}</button>
    );
}

export default StockButton;