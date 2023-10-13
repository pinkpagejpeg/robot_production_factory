import React from 'react'
import classes from './ProductionButton.module.css'
import { useState } from 'react';

const ProductionButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.production_btn}>{children}</button>
    );
}
 
export default ProductionButton;