import React from 'react'
import classes from './ProductionSparesButton.module.scss'

const ProductionSparesButton = ({ active, children, ...props }) => {
    const rootBioarmClasses = [classes.production__bioarm_btn]
    const rootMicrochipClasses = [classes.production__microchip_btn]
    const rootSoulClasses = [classes.production__soul_btn]

    if (active) {
        rootBioarmClasses.push(classes.active)
        rootMicrochipClasses.push(classes.active)
        rootSoulClasses.push(classes.active)
    }

    return (
        props.spare.name === 'bioarm' ?
        <button {...props} className={rootBioarmClasses.join(' ')}>{children}</button> :
        props.spare.name === 'microchip' ? 
        <button {...props} className={rootMicrochipClasses.join(' ')}>{children}</button> :
        <button {...props} className={rootSoulClasses.join(' ')}>{children}</button>
    );
}

export default ProductionSparesButton;