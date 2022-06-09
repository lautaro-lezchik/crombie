import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IncreaseTime from './IncreaseTime';
import DecreaseTime from './DecreaseTime';

const Arrows = () => {
    return (
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <IncreaseTime />
            <DecreaseTime />
        </ButtonGroup>
    )
}

export default Arrows