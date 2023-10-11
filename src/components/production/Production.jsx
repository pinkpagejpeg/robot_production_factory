import React from 'react'
import './Production.css'
import frontMaleAvailable from './../../assets/images/front_male_available.png'
import iconBioarmDisable from './../../assets/images/icon_bioarm_disable.svg'
import iconMicrochipDisable from './../../assets/images/icon_microchip_disable.svg'
import iconSoulDisable from './../../assets/images/icon_soul_disable.svg'
import ProductionButton from '../UI/productionButton/ProductionButton'

const Production = () => {
    return ( 
        <div className="production_wrapper">
            <div className="production_side">
                <span className="section_number">05</span>
            </div>
            <div className="production_main">
                <h2 className="section_title">Производство</h2>
                <div className="production_main_info">
                    <div className="production_settings_wrapper">
                        <div className="production_settings">
                            <div className="production_settings_options">
                                <div className="production_options_type">
                                    <p className="production_options_title">Тип биоробота:</p>
                                    <div className="production_radio_wrapper">
                                         <div className="production_radio">
                                            <input id="frontend" name="type" type="radio" checked/>
                                            <label htmlFor="frontend" className="production_radio_info">FrontEnd</label>
                                        </div>
                                        <div className="production_radio">
                                            <input id="design" name="type" type="radio"/>
                                            <label htmlFor="design" className="production_radio_info">Design</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="production_options_stabilizer">
                                    <p className="production_options_title">Cтабилизатор:</p>
                                    <div className="production_radio_wrapper">
                                         <div className="production_radio">
                                            <input id="male" name="stabilizer" type="radio" checked/>
                                            <label htmlFor="male" className="production_radio_info">Male</label>
                                        </div>
                                        <div className="production_radio">
                                            <input id="famale" name="stabilizer" type="radio"/>
                                            <label htmlFor="famale" className="production_radio_info">Famale</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="production_settings_spares">
                                <img className="production_spares_icon" src={iconBioarmDisable} alt="Icon bioarm" />
                                <img className="production_spares_icon" src={iconBioarmDisable} alt="Icon bioarm" />
                                <img className="production_spares_icon" src={iconBioarmDisable} alt="Icon bioarm" />
                                <img className="production_spares_icon" src={iconBioarmDisable} alt="Icon bioarm" />
                                <img className="production_spares_icon" src={iconMicrochipDisable} alt="Icon microchip" />
                                <img className="production_spares_icon" src={iconMicrochipDisable} alt="Icon microchip" />
                                <img className="production_spares_icon" src={iconMicrochipDisable} alt="Icon microchip" />
                                <img className="production_spares_icon" src={iconMicrochipDisable} alt="Icon microchip" />
                                <img className="production_spares_icon" src={iconSoulDisable} alt="Icon soul" />
                            </div>
                        </div>

                        <div className="production_button">
                            <ProductionButton>Произвести за 10 монет</ProductionButton>
                            <p className="production_button_info">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                        </div>
                    </div>

                    <div className="production_image_wrapper">
                        <img className="production_image_robot" src={frontMaleAvailable} alt="Robot"/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Production;