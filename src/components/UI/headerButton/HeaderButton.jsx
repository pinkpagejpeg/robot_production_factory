import React from 'react'
import classes from './HeaderButton.module.css'
import { useState } from 'react';

const HeaderButton = ({children, ...props}) => {
    return ( 
        <button {...props} className={classes.header_btn} >{children}</button>
    );
}
 
export default HeaderButton;