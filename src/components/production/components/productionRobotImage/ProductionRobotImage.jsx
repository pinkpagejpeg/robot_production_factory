import React from 'react'
import classes from './ProductionRobotImage.module.scss'

const ProductionRobotImage = ({ selectedType, selectedStabilizer, disabled, submitted }) => {
    let imageClass = `${classes.robot__default_disable}`

    if (selectedType === 'frontend' && selectedStabilizer === 'male') {
        !disabled ? imageClass = `${classes.robot__front_male_available}` :
            submitted ? imageClass = `${classes.robot__front_male_ready}` :
                imageClass = `${classes.robot__front_male_disable}`
    } else if (selectedType === 'frontend' && selectedStabilizer === 'famale') {
        !disabled ? imageClass = `${classes.robot__front_famale_available}` :
            submitted ? imageClass = `${classes.robot__front_famale_ready}` :
                imageClass = `${classes.robot__front_famale_disable}`
    } else if (selectedType === 'design' && selectedStabilizer === 'male') {
        !disabled ? imageClass = `${classes.robot__design_male_available}` :
            submitted ? imageClass = `${classes.robot__design_male_ready}` :
                imageClass = `${classes.robot__design_male_disable}`
    } else if (selectedType === 'design' && selectedStabilizer === 'famale') {
        !disabled ? imageClass = `${classes.robot__design_famale_available}` :
            submitted ? imageClass = `${classes.robot__design_famale_ready}` :
                imageClass = `${classes.robot__design_famale_disable}`
    }

    return (
        <div className={imageClass}></div>
    );
}

export default ProductionRobotImage;