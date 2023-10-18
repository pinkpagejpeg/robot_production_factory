import React from 'react'
import classes from './ProductionButton.module.scss'

const ProductionButton = ({ children, ...props }) => {
    return (
        <button {...props} className={classes.production__btn}>{children}</button>
    );
}

export default ProductionButton;