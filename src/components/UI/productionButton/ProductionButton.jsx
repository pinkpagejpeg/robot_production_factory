import React from 'react'
import classes from './ProductionButton.module.css'
import { useState } from 'react';

const ProductionButton = ({children, ...props}) => {
    return ( 
        <a {...props} className={classes.production_btn} href="#">{children}</a>
    );
}
 
export default ProductionButton;