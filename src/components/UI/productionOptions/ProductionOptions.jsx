import React, { useState, useEffect } from 'react'
import classes from './ProductionOptions.module.scss'
import SpareStore from '../../../store/SpareStore'
import { observer } from 'mobx-react-lite'
import ProductionSparesButton from '../productionSparesButton/ProductionSparesButton'
import ProductionRadio from '../productionRadio/ProductionRadio'

const ProductionRobotOptions = observer(({ handleSelectedValues, spareButtonsState }) => {
    const bioarms = SpareStore.bioarms.currentCount
    const microchips = SpareStore.microchips.currentCount
    const souls = SpareStore.souls.currentCount
    const [selectedType, setSelectedType] = useState('');
    const [selectedStabilizer, setSelectedStabilizer] = useState('');

    const [sparesBioarm, setSparesBioarm] = useState(
        Array.from({ length: SpareStore.bioarms.requiredCount }).map((bioarmItem, index) => (
        { name: 'bioarm', available: false, active: false }
    )));

    const [sparesMicrochip, setSparesMicrochip] = useState(
        Array.from({ length: SpareStore.microchips.requiredCount }).map((microchipItem, index) => (
        { name: 'microchip', available: false, active: false }
    )));

    const [sparesSoul, setSparesSoul] = useState([
        { name: 'soul', available: false, active: false }
    ]);

    const handleActiveSpares = (index, spares, setSpares) => {
        const activeSpares = spares.map((spare, i) => {
            if (i === index) {
                return { ...spare, active: spare.active ? false : true };
            }
            return spare;
        });
        setSpares(activeSpares);
    };

    const handleSpareButtonsChange = () => {
        const allButtonsActive = sparesBioarm.every((spare) => spare.active) &&
            sparesMicrochip.every((spare) => spare.active) &&
            sparesSoul.every((spare) => spare.active);

        spareButtonsState(allButtonsActive);
    };

    useEffect(() => {
        const availableSparesBioarm = sparesBioarm.map((spare, index) => {
            if (index < bioarms) {
                return { ...spare, available: true }
            } else {
                return { ...spare, available: false, active: false, clickCount: 1 }
            }
        });

        setSparesBioarm(availableSparesBioarm);

        const availableSparesMicrochip = sparesMicrochip.map((spare, index) => {
            if (index < microchips) {
                return { ...spare, available: true }
            } else {
                return { ...spare, available: false, active: false, clickCount: 1 }
            }
        });

        setSparesMicrochip(availableSparesMicrochip);

        const availableSparesSoul = sparesSoul.map((spare, index) => {
            if (index < souls) {
                return { ...spare, available: true }
            } else {
                return { ...spare, available: false, active: false, clickCount: 1 }
            }
        });

        setSparesSoul(availableSparesSoul);
    }, [bioarms, microchips, souls]);

    useEffect(() => {
        handleSpareButtonsChange();
    }, [sparesBioarm, sparesMicrochip, sparesSoul]);

    return (
        <div className={classes.production__settings}>
            <div className={classes.production__settings_options}>
                <div className={classes.production__options_type}>
                    <p className={classes.production__options_title}>Тип биоробота:</p>
                    <div className={classes.production__radio_wrapper}>
                        <ProductionRadio label="Frontend" name="type" value="frontend" onChange={event => { setSelectedType(event.target.value); handleSelectedValues(event.target.value, selectedStabilizer); }} />
                        <ProductionRadio label="Design" name="type" value="design" onChange={event => { setSelectedType(event.target.value); handleSelectedValues(event.target.value, selectedStabilizer); }} />
                    </div>
                </div>
                <div className={classes.production__options_stabilizer}>
                    <p className={classes.production__options_title}>Cтабилизатор:</p>
                    <div className={classes.production__radio_wrapper}>
                        <ProductionRadio label="Male" name="stabilizator" value="male" onChange={event => { setSelectedStabilizer(event.target.value); handleSelectedValues(selectedType, event.target.value); }} />
                        <ProductionRadio label="Famale" name="stabilizator" value="famale" onChange={event => { setSelectedStabilizer(event.target.value); handleSelectedValues(selectedType, event.target.value); }} />
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