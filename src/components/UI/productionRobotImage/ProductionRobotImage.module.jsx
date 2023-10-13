import React from 'react'
import classes from'./ProductionRobotImage.module.css'
import frontMaleAvailable from './../../../assets/images/front_male_available.png'

const ProductionRobotImage = () => {
    return ( 
        <div className={classes.production_image_wrapper}>
            <img className={classes.production_image_robot} src={frontMaleAvailable} alt="Robot"/>
        </div>
    );
}
 
export default ProductionRobotImage;