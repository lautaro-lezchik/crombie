import React from 'react'
import IncreaseTime from './IncreaseTime';
import DecreaseTime from './DecreaseTime';

const Arrows = () => {
    return (
        <div className='buttonsContainer'>
            <IncreaseTime />
            <DecreaseTime />
        </div>
    )
}

export default Arrows