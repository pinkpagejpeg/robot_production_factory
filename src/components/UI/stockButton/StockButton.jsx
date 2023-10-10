import React from 'react'
import classes from './StockButton.module.css'
import { useState } from 'react';

const StockButton = ({children, ...props}) => {
    return ( 
        <a {...props} className={classes.stock_btn} href="#">{children}</a>
    );
}
 
export default StockButton;