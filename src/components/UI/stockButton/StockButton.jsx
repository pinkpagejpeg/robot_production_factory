import React from 'react'
import classes from './StockButton.module.css'
import { useState } from 'react';

const StockButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.stock_btn}>{children}</button>
    );
}
 
export default StockButton;