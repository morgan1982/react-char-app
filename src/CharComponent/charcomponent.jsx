import React from 'react';
import './char.css';

const CharComponent = (props) => {


    return (
        <div className="char" onClick={props.deleted}>
            {props.letter}
        </div>
        )
}

export default CharComponent;
