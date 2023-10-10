import React from 'react'
import classes from './HeaderButton.module.css'
import { useState } from 'react';

// function hoverHeaderButton () {
    
// }

const HeaderButton = ({children, ...props}) => {
    return ( 
        <a {...props} className={classes.header_btn} href="#">{children}</a>
    );
}
 
export default HeaderButton;