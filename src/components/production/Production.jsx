import React, { useState, useEffect } from 'react'
import './Production.scss'
import WalletStore from '../../store/WalletStore'
import SpareStore from '../../store/SpareStore'
import ProductionButton from '../UI/productionButton/ProductionButton'
import ProductionRobotImage from '../UI/productionRobotImage/ProductionRobotImage'
import ProductionRobotOptions from '../UI/productionOptions/ProductionOptions'

const Production = () => {
    const coins = WalletStore.coinsCount
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const [submit, setSubmit] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [activeSpares, setActiveSpares] = useState(false);
    const [selectedType, setSelectedType] = useState('');
    const [selectedStabilizer, setSelectedStabilizer] = useState('');

    const handleSelectedValues = (type, stabilizer) => {
        setSelectedType(type);
        setSelectedStabilizer(stabilizer);
    };

    const handleSpareButtons = (state) => {
        if (state) {
            setActiveSpares(true)
        } else {
            setActiveSpares(false)
        }
    };

    useEffect(() => {
        if (activeSpares) {
            setDisabled(!(coins >= 10));
        } else {
            setDisabled(true)
        }
    }, [coins, activeSpares]);

    const handleProductionButton = () => {
        setSubmit(true)
        setDisabled(true)
        SpareStore.setBioarms(bioarms - SpareStore.bioarms.requiredCount);
        SpareStore.setMicrochips(microchips - SpareStore.microchips.requiredCount);
        SpareStore.setSouls(souls - SpareStore.souls.requiredCount);
    }

    return (
        <div id="production" className="production__wrapper">
            <div className="production__side">
                <span className="section_number">05</span>
            </div>
            <div className="production__main">
                <h2 className="section_title">Производство</h2>
                <div className="production__main_info">
                    <div className="production__settings_wrapper">
                        <ProductionRobotOptions handleSelectedValues={handleSelectedValues} spareButtonsState={handleSpareButtons} />

                        <div className="production__button">
                            <ProductionButton onClick={handleProductionButton} disabled={disabled}>Произвести за 10 монет</ProductionButton>
                            <p className="production__button_info">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                        </div>
                    </div>

                    <ProductionRobotImage selectedType={selectedType} selectedStabilizer={selectedStabilizer} disabled={disabled} submitted={submit} />
                </div>
            </div>
        </div>
    );
}

export default Production;