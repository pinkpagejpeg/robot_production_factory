import React from 'react'
import './Hero.scss'
import heroRobots from './../../assets/images/hero_robots.png'

const Hero = () => {
    return (
        <div className="hero__wrapper">
            <div className="hero__side">
                <span className="section_number">01</span>
                <p className="hero__pointer_text">скролл</p>
            </div>
            <div className="hero__main">
                <h1 className="hero__title">Фабрика по производству биороботов</h1>
                <p className="hero__text">класса «монитор-кресло»</p>
            </div>
            <img className="hero__image" src={heroRobots} alt="Hero robots image" />
        </div>
    );
}

export default Hero;