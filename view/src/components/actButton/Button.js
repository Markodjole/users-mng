import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({user, act, onBtnClick}) => {

    return ( 
        <React.Fragment>
            <button onClick={() => onBtnClick(user, act)} className={`btn ${act}`}>{act}</button>
        </React.Fragment>
     );
}
 
export default Button;