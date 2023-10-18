import React from 'react'
import classes from './ProductionRadio.module.scss'

const ProductionRadio = ({ name, label, value, onChange }) => {
    return (
        <div className={classes.production__radio}>
            <input onChange={onChange} id={value} name={name} type="radio" value={value} />
            <label htmlFor={value} className={classes.production__radio_info}>{label}</label>
        </div>
    );
}

export default ProductionRadio;