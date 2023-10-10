import React from 'react'
import './Hero.css'
import heroRobots from './../../assets/images/hero_robots.png'

const Hero = () => {
    return ( 
        <div className="hero_wrapper">
            <div className="hero_side">
                <span className="section_number">01</span>
                <p className="hero_pointer_text">скролл</p>
            </div>
            <div className="hero_main">
                <h1 className="hero_title">Фабрика по производству биороботов</h1>
                <p className="hero_text">класса «монитор-кресло»</p>
            </div>
            <img src={heroRobots} alt="Hero robots image"/>
        </div>
    );
}
 
export default Hero;