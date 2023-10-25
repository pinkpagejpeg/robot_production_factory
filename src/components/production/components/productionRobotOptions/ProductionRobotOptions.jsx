import React, { useState, useEffect } from 'react'
import classes from './ProductionRobotOptions.module.scss'
import SpareStore from '../../../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import ProductionSparesButton from '../../../UI/productionSparesButton/ProductionSparesButton'
import ProductionRadio from '../../../UI/productionRadio/ProductionRadio'

const ProductionRobotOptions = observer(({ handleSelectedValues }) => {
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const selectedBioarms = SpareStore.bioarms.selectedCount
    const selectedMicrochips = SpareStore.microchips.selectedCount
    const selectedSouls = SpareStore.souls.selectedCount
    const [selectedType, setSelectedType] = useState('')
    const [selectedStabilizer, setSelectedStabilizer] = useState('')

    const [sparesBioarm, setSparesBioarm] = useState(
        Array.from({ length: SpareStore.bioarms.requiredCount }).map((bioarmItem, index) => (
            { name: 'bioarm', available: false, active: false }
        )))

    const [sparesMicrochip, setSparesMicrochip] = useState(
        Array.from({ length: SpareStore.microchips.requiredCount }).map((microchipItem, index) => (
            { name: 'microchip', available: false, active: false }
        )))

    const [sparesSoul, setSparesSoul] = useState([
        { name: 'soul', available: false, active: false }
    ])

    const handleActiveSpares = (index, spares, setSpares) => {
        const activeSpares = spares.map((spare, i) => {
            if (i === index) {
                if (spare.active) {
                    switch (spares) {
                        case sparesBioarm:
                            SpareStore.selectBioarms(selectedBioarms - 1)
                            break
                        case sparesMicrochip:
                            SpareStore.selectMicrochips(selectedMicrochips - 1)
                            break
                        case sparesSoul:
                            SpareStore.selectSouls(selectedSouls - 1)
                            break
                    }

                    return { ...spare, active: false }
                } else {
                    switch (spares) {
                        case sparesBioarm:
                            SpareStore.selectBioarms(selectedBioarms + 1)
                            break
                        case sparesMicrochip:
                            SpareStore.selectMicrochips(selectedMicrochips + 1)
                            break
                        case sparesSoul:
                            SpareStore.selectSouls(selectedSouls + 1)
                            break
                    }

                    return { ...spare, active: true }
                }
            }
            return spare
        })
        setSpares(activeSpares)
    }

    useEffect(() => {
        const availableSparesBioarm = sparesBioarm.map((spare, index) => {
            if (index < bioarms) {
                if (selectedBioarms === 0) {
                    return { ...spare, available: true, active: false }
                }
                else {
                    return { ...spare, available: true, active: spare.active }
                }
            } else {
                if (spare.active && selectedBioarms > 0) {
                    SpareStore.selectBioarms(selectedBioarms - 1)
                }

                return { ...spare, available: false, active: false }
            }
        })

        setSparesBioarm(availableSparesBioarm)

        const availableSparesMicrochip = sparesMicrochip.map((spare, index) => {
            if (index < microchips) {
                if (selectedMicrochips === 0) {
                    return { ...spare, available: true, active: false }
                }
                else {
                    return { ...spare, available: true, active: spare.active }
                }
            } else {
                if (spare.active && selectedMicrochips > 0) {
                    SpareStore.selectMicrochips(selectedMicrochips - 1)
                }

                return { ...spare, available: false, active: false }
            }
        })

        setSparesMicrochip(availableSparesMicrochip)

        const availableSparesSoul = sparesSoul.map((spare, index) => {
            if (index < souls) {
                if (selectedSouls === 0) {
                    return { ...spare, available: true, active: false }
                }
                else {
                    return { ...spare, available: true, active: spare.active }
                }
            } else {
                if (spare.active && selectedSouls > 0) {
                    SpareStore.selectSouls(selectedSouls - 1)
                }

                return { ...spare, available: false, active: false }
            }
        })

        setSparesSoul(availableSparesSoul)
    }, [bioarms, microchips, souls])

    return (
        <div className={classes.production__settings}>
            <div className={classes.production__settings_options}>
                <div className={classes.production__options_type}>
                    <p className={classes.production__options_title}>Тип биоробота:</p>
                    <div className={classes.production__radio_wrapper}>
                        <ProductionRadio label="Frontend" name="type" value="frontend" onChange={event => { setSelectedType(event.target.value); handleSelectedValues(event.target.value, selectedStabilizer) }} />
                        <ProductionRadio label="Design" name="type" value="design" onChange={event => { setSelectedType(event.target.value); handleSelectedValues(event.target.value, selectedStabilizer) }} />
                    </div>
                </div>
                <div className={classes.production__options_stabilizer}>
                    <p className={classes.production__options_title}>Cтабилизатор:</p>
                    <div className={classes.production__radio_wrapper}>
                        <ProductionRadio label="Male" name="stabilizator" value="male" onChange={event => { setSelectedStabilizer(event.target.value); handleSelectedValues(selectedType, event.target.value) }} />
                        <ProductionRadio label="Famale" name="stabilizator" value="famale" onChange={event => { setSelectedStabilizer(event.target.value); handleSelectedValues(selectedType, event.target.value) }} />
                    </div>
                </div>
            </div>

            <div className={classes.production__settings_spares}>
                {sparesBioarm.map((spare, index) => (
                    <ProductionSparesButton key={index} onClick={() => handleActiveSpares(index, sparesBioarm, setSparesBioarm)} disabled={!spare.available} spare={spare} active={spare.active} />
                ))}
                {sparesMicrochip.map((spare, index) => (
                    <ProductionSparesButton key={index} onClick={() => handleActiveSpares(index, sparesMicrochip, setSparesMicrochip)} disabled={!spare.available} spare={spare} active={spare.active} />
                ))}
                {sparesSoul.map((spare, index) => (
                    <ProductionSparesButton key={index} onClick={() => handleActiveSpares(index, sparesSoul, setSparesSoul)} disabled={!spare.available} spare={spare} active={spare.active} />
                ))}
            </div>
        </div>
    );
})

export default ProductionRobotOptions;