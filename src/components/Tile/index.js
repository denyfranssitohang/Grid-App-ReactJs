import * as React from 'react';
import { string, number, func } from 'prop-types';
import './style.css';

export default function Tile({color, id, onDoubleClick}){
    return (
        <div className="tile" style={{backgroundColor: color}} onDoubleClick={onDoubleClick}>

        </div>
    )
}

/* ---------------------------- */
Tile.defaultProps = {
    color: 'grey'
}
/* ---------------------------- */

/* Cek pada properti propTypess */
Tile.propTypes = {
    color: string,
    id : number.isRequired,
    onDoubleClick: func.isRequired
}
/* End Cek pada properti propTypess */