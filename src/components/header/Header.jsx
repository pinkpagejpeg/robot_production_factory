import React from 'react'
import './Header.scss'
import logo from './../../assets/images/logo.svg'
import HeaderButton from '../UI/headerButton/HeaderButton';

const Header = () => {
    return (
        <div className="header__wrapper">
            <img src={logo} alt="logo" />
            <HeaderButton isLink to="#production">Произвести биоробота</HeaderButton>
        </div>
    );
}

export default Header;