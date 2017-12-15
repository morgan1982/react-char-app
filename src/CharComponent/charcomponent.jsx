import React from 'react';
import './char.css';

const CharComponent = (props) => {


    return (
        <div className="char" onClick={props.deleted} style={props.style}>
            {props.letter}
        </div>
        )
}

export default CharComponent;
