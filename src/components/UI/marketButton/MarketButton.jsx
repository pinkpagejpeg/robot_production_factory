import React from 'react'
import classes from './MarketButton.module.css'
import { useState } from 'react';

const MarketButton = ({children, ...props}) => {
    return ( 
        <a {...props} className={classes.market_btn} href="#">{children}</a>
    );
}
 
export default MarketButton;