import * as React from 'react';
import { func, string } from 'prop-types';

export default function AddTileButton({onClick, color}){
    /* Object Style */
    const buttonSytles = {
        backgroundColor: color,
        display: 'inline-block',
        width: 20,
        height: 20,
        cursor: 'pointer',
        border: '1px solid black'
    }
    /* End Object Style */

    return (
        <div style={buttonSytles} onClick={onClick}>

        </div>
    )
}

/* ------------------------------ */
AddTileButton.propTypes = {
    onClick: func.isRequired,
    color: string.isRequired
}
/* ------------------------------ */