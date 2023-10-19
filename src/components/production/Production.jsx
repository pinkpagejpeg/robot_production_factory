import React, { useState, useEffect } from 'react'
import './Production.scss'
import WalletStore from '../../store/WalletStore'
import SpareStore from '../../store/SpareStore'
import ProductionButton from '../UI/productionButton/ProductionButton'
import ProductionRobotImage from '../UI/productionRobotImage/ProductionRobotImage'
import ProductionRobotOptions from '../UI/productionOptions/ProductionOptions'
import ProductionModal from '../UI/productionModal/ProductionModal'

const Production = () => {
    const coins = WalletStore.coinsCount
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const selectedBioarms = SpareStore.bioarms.selectedCount
    const selectedMicrochips = SpareStore.microchips.selectedCount
    const selectedSouls = SpareStore.souls.selectedCount
    const requiredBioarms = SpareStore.bioarms.requiredCount
    const requiredMicrochips = SpareStore.microchips.requiredCount
    const requiredSouls = SpareStore.souls.requiredCount
    const [modalVisible, setModalVisible] = useState(false)
    const [submit, setSubmit] = useState(false);
    const [disabled, setDisabled] = useState(true);
    const [selectedType, setSelectedType] = useState('');
    const [selectedStabilizer, setSelectedStabilizer] = useState('');

    const handleSelectedValues = (type, stabilizer) => {
        setSelectedType(type);
        setSelectedStabilizer(stabilizer);
    };

    useEffect(() => {
        if ((selectedBioarms === requiredBioarms) && (selectedMicrochips === requiredMicrochips) && (selectedSouls === requiredSouls)) {
            setDisabled(!(coins >= 10));
        } else {
            setDisabled(true)
        }
    }, [coins, selectedBioarms, selectedMicrochips, selectedSouls]);

    const handleProductionButton = () => {
        setModalVisible(true);
        setSubmit(true)
        setDisabled(true)
        SpareStore.setBioarms(bioarms - requiredBioarms);
        SpareStore.selectBioarms(0);
        SpareStore.setMicrochips(microchips - requiredMicrochips);
        SpareStore.selectMicrochips(0);
        SpareStore.setSouls(souls - requiredSouls);
        SpareStore.selectSouls(0);
    }

    return (
        <>
        <div id="production" className="production__wrapper">
            <div className="production__side">
                <span className="section_number">05</span>
            </div>
            <div className="production__main">
                <h2 className="section_title">Производство</h2>
                <div className="production__main_info">
                    <div className="production__settings_wrapper">
                        <ProductionRobotOptions handleSelectedValues={handleSelectedValues} />

                        <div className="production__button">
                            <ProductionButton onClick={handleProductionButton} disabled={disabled}>Произвести за 10 монет</ProductionButton>
                            <p className="production__button_info">Для производства биоробота не хватает 2 биоруки, 3 микрочипа и 1 души</p>
                        </div>
                    </div>

                    <ProductionRobotImage selectedType={selectedType} selectedStabilizer={selectedStabilizer} disabled={disabled} submitted={submit} />
                </div>
            </div>
        </div>
        <ProductionModal visible={modalVisible} setVisible={setModalVisible} />
        </>
    );
}

export default Production;