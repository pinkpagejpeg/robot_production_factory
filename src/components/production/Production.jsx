import React from 'react'
import './Production.css'
import ProductionButton from '../UI/productionButton/ProductionButton'
import ProductionRobotImage from '../UI/productionRobotImage/ProductionRobotImage.module'
import ProductionRobotOptions from '../UI/productionOptions/ProductionOptions.module'

const Production = () => {
    return ( 
        <div id="production" className="production_wrapper">
            <div className="production_side">
                <span className="section_number">05</span>
            </div>
            <div className="production_main">
                <h2 className="section_title">Производство</h2>
                <div className="production_main_info">
                    <div className="production_settings_wrapper">
                        <ProductionRobotOptions></ProductionRobotOptions>

                        <div className="production_button">
                            <ProductionButton disabled={true}>Произвести за 10 монет</ProductionButton>
                            <p className="production_button_info">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                        </div>
                    </div>

                    <ProductionRobotImage></ProductionRobotImage>
                </div>
            </div>
        </div>
    );
}
 
export default Production;