import React from 'react'
import classes from './HeaderButton.module.scss'

const HeaderButton = ({ children, ...props }) => {
    return (
        props.isLink ?
            <a {...props} className={classes.header__btn} href={props.to}>{children}</a> :
            <button {...props} className={classes.header__btn} >{children}</button>
    );
}

export default HeaderButton;