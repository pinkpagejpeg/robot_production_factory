import React from 'react'
import './Header.css'
import logo from './../../assets/images/logo.svg'
import HeaderButton from '../UI/headerButton/HeaderButton';

function addActiveClass () {

}

const Header = () => {
    // const [value, setValue] = useState();
    return ( 
        <div className="header_wrapper">
            <img src={logo} alt="logo"/>
            <HeaderButton onClick={addActiveClass}>Произвести биоробота</HeaderButton>
        </div>
    );
}
 
export default Header;