import React from 'react'
import classes from './Hero.module.scss'
import heroRobots from './../../assets/images/hero_robots.png'

const Hero = () => {
    return (
        <div className={classes.hero__wrapper}>
            <div className={classes.hero__side}>
                <span className={classes.section_number}>01</span>
                <p className={classes.hero__pointer_text}>скролл</p>
            </div>
            <div className={classes.hero__main}>
                <h1 className={classes.hero__title}>Фабрика по производству биороботов</h1>
                <p className={classes.hero__text}>класса «монитор-кресло»</p>
            </div>
            <img className={classes.hero__image} src={heroRobots} alt="Hero robots image" />
        </div>
    );
}

export default Hero;