import React, { useState, useEffect } from 'react'
import classes from './Production.module.scss'
import WalletStore from '../../store/WalletStore'
import SpareStore from '../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import ProductionButton from '../UI/productionButton/ProductionButton'
import ProductionRobotImage from './components/productionRobotImage/ProductionRobotImage'
import ProductionRobotOptions from './components/productionRobotOptions/ProductionRobotOptions'
import ProductionModal from '../UI/productionModal/ProductionModal'
import productionInfo from '../../utils/productionInfo'

const Production = observer(() => {
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
    const [submit, setSubmit] = useState(false)
    const [disabled, setDisabled] = useState(true)
    const [productionButtonInfo, setProductionButtonInfo] = useState('')
    const [selectedType, setSelectedType] = useState('')
    const [selectedStabilizer, setSelectedStabilizer] = useState('')

    const handleSelectedValues = (type, stabilizer) => {
        setSelectedType(type)
        setSelectedStabilizer(stabilizer)
    }

    useEffect(() => {
        if ((selectedBioarms === requiredBioarms) && (selectedMicrochips === requiredMicrochips) && (selectedSouls === requiredSouls) && (selectedType != '') && (selectedStabilizer != '')) {
            setDisabled(!(coins >= 10))
        } else {
            setDisabled(true)
        }

        setProductionButtonInfo(productionInfo(coins, selectedBioarms, selectedMicrochips, selectedSouls, requiredBioarms, requiredMicrochips, requiredSouls, selectedType, selectedStabilizer))
    }, [coins, selectedBioarms, selectedMicrochips, selectedSouls, selectedType, selectedStabilizer])

    const handleProductionButton = () => {
        setModalVisible(true)
        setSubmit(true)
        setDisabled(true)
        SpareStore.setBioarms(bioarms - requiredBioarms)
        SpareStore.selectBioarms(0)
        SpareStore.setMicrochips(microchips - requiredMicrochips)
        SpareStore.selectMicrochips(0)
        SpareStore.setSouls(souls - requiredSouls)
        SpareStore.selectSouls(0)
    }

    return (
        <>
            <div id="production" className={classes.production__wrapper}>
                <div className={classes.production__side}>
                    <span className={classes.section_number}>05</span>
                </div>
                <div className={classes.production__main}>
                    <h2 className={classes.section_title}>Производство</h2>
                    <div className={classes.production__main_info}>
                        <div className={classes.production__settings_wrapper}>
                            <ProductionRobotOptions handleSelectedValues={handleSelectedValues} />

                            <div className={classes.production__button}>
                                <ProductionButton onClick={handleProductionButton} disabled={disabled}>Произвести за 10 монет</ProductionButton>
                                <p className={classes.production__button_info}>{productionButtonInfo}</p>
                            </div>
                        </div>

                        <ProductionRobotImage selectedType={selectedType} selectedStabilizer={selectedStabilizer} disabled={disabled} submitted={submit} />
                    </div>
                </div>
            </div>
            <ProductionModal visible={modalVisible} setVisible={setModalVisible} />
        </>
    );
})

export default Production;