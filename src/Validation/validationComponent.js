import React from 'react';


const ValidationComponent = (props) => {
    let items;
    if (props.length < 5)
    {
        items = <p style={{ 'color': 'red' }}>text to short</p>
    }else {
        items = <p style={{ 'color': 'green' }}>text long enough</p>
    }

    return (
        <div>
            {items}
        </div>
        )
}

export default ValidationComponent;
