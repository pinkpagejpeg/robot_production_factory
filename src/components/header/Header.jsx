import React from 'react'
import classes from './Header.module.scss'
import logo from './../../assets/images/logo.svg'
import HeaderButton from '../UI/headerButton/HeaderButton'

const Header = () => {
    return (
        <div className={classes.header__wrapper}>
            <img className={classes.header__logo} src={logo} alt="logo" />
            <HeaderButton isLink to="#production">Произвести биоробота</HeaderButton>
        </div>
    );
}

export default Header;