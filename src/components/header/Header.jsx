import React from 'react'
import './Header.css'
import logo from './../../assets/images/logo.svg'
import HeaderButton from '../UI/headerButton/HeaderButton';

const Header = () => {
    return ( 
        <div className="header_wrapper">
            <img src={logo} alt="logo"/>
            <HeaderButton>Произвести биоробота</HeaderButton>
        </div>
    );
}
 
export default Header;