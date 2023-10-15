import React from 'react'
import classes from './ProductionButton.module.scss'

const ProductionButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.production_btn}>{children}</button>
    );
}

export default ProductionButton;