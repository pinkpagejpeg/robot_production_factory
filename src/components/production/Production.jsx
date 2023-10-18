import React, { useState, useEffect } from 'react'
import './Production.scss'
import WalletStore from '../../store/WalletStore'
import BioarmStore from '../../store/BioarmStore'
import MicrochipStore from '../../store/MicrochipStore'
import SoulStore from '../../store/SoulStore'
import ProductionButton from '../UI/productionButton/ProductionButton'
import ProductionRobotImage from '../UI/productionRobotImage/ProductionRobotImage'
import ProductionRobotOptions from '../UI/productionOptions/ProductionOptions'

const Production = () => {
    const coins = WalletStore.coinsCount
    const bioarms = BioarmStore.bioarmsCount
    const microchips = MicrochipStore.microchipsCount
    const souls = SoulStore.soulsCount
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
        BioarmStore.setBioarms(bioarms - 4);
        MicrochipStore.setMicrochips(microchips - 4);
        SoulStore.setSouls(souls - 1);
    }

    return (
        <div id="production" className="production_wrapper">
            <div className="production_side">
                <span className="section_number">05</span>
            </div>
            <div className="production_main">
                <h2 className="section_title">Производство</h2>
                <div className="production_main_info">
                    <div className="production_settings_wrapper">
                        <ProductionRobotOptions handleSelectedValues={handleSelectedValues} spareButtonsState={handleSpareButtons} />

                        <div className="production_button">
                            <ProductionButton onClick={handleProductionButton} disabled={disabled}>Произвести за 10 монет</ProductionButton>
                            <p className="production_button_info">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                        </div>
                    </div>

                    <ProductionRobotImage selectedType={selectedType} selectedStabilizer={selectedStabilizer} disabled={disabled} submitted={submit} />
                </div>
            </div>
        </div>
    );
}

export default Production;