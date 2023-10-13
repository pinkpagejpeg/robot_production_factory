import React from 'react'
import classes from './ProductionOptions.module.css'
import iconBioarmDisable from './../../../assets/images/icon_bioarm_disable.svg'
import iconMicrochipDisable from './../../../assets/images/icon_microchip_disable.svg'
import iconSoulDisable from './../../../assets/images/icon_soul_disable.svg'

const ProductionRobotOptions = () => {
    return (
        <div className={classes.production_settings}>
            <div className={classes.production_settings_options}>
                <div className={classes.production_options_type}>
                    <p className={classes.production_options_title}>Тип биоробота:</p>
                    <div className={classes.production_radio_wrapper}>
                        <div className={classes.production_radio}>
                            <input id="frontend" name="type" type="radio" checked />
                            <label htmlFor="frontend" className={classes.production_radio_info}>FrontEnd</label>
                        </div>
                        <div className={classes.production_radio}>
                            <input id="design" name="type" type="radio" />
                            <label htmlFor="design" className={classes.production_radio_info}>Design</label>
                        </div>
                    </div>
                </div>
                <div className={classes.production_options_stabilizer}>
                    <p className={classes.production_options_title}>Cтабилизатор:</p>
                    <div className={classes.production_radio_wrapper}>
                        <div className={classes.production_radio}>
                            <input id="male" name="stabilizer" type="radio" checked />
                            <label htmlFor="male" className={classes.production_radio_info}>Male</label>
                        </div>
                        <div className={classes.production_radio}>
                            <input id="famale" name="stabilizer" type="radio" />
                            <label htmlFor="famale" className={classes.production_radio_info}>Famale</label>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.production_settings_spares}>
                <img className={classes.production_spares_icon} src={iconBioarmDisable} alt="Icon bioarm" />
                <img className={classes.production_spares_icon} src={iconBioarmDisable} alt="Icon bioarm" />
                <img className={classes.production_spares_icon} src={iconBioarmDisable} alt="Icon bioarm" />
                <img className={classes.production_spares_icon} src={iconBioarmDisable} alt="Icon bioarm" />
                <img className={classes.production_spares_icon} src={iconMicrochipDisable} alt="Icon microchip" />
                <img className={classes.production_spares_icon} src={iconMicrochipDisable} alt="Icon microchip" />
                <img className={classes.production_spares_icon} src={iconMicrochipDisable} alt="Icon microchip" />
                <img className={classes.production_spares_icon} src={iconMicrochipDisable} alt="Icon microchip" />
                <img className={classes.production_spares_icon} src={iconSoulDisable} alt="Icon soul" />
            </div>
        </div>
    );
}

export default ProductionRobotOptions;