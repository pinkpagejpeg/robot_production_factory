import React from 'react'
import classes from './MarketButton.module.css'
import { useState } from 'react';

const MarketButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.market_btn}>{children}</button>
    );
}
 
export default MarketButton;