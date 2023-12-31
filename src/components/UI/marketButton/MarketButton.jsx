import React from 'react'
import classes from './MarketButton.module.scss'

const MarketButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.market__btn}>{children}</button>
    );
}

export default MarketButton;