import React from 'react'
import classes from './HeaderButton.module.scss'

const HeaderButton = ({ children, ...props }) => {
    return (
        props.isLink ?
            <a {...props} className={classes.header_btn} href={props.to}>{children}</a> :
            <button {...props} className={classes.header_btn} >{children}</button>
    );
}

export default HeaderButton;