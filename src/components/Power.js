//import { Button } from '@mui/material'
import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux';


const Power = () => {
    const dispatch = useDispatch()

    const handleClick = (event) => {
        dispatch({type:'POWER', payload: event.type})
        console.log(event.type);
    }

    return (
        <Button className='pwrButton' onClick={handleClick}>
            <div className='circle'></div>
            PWR
        </Button>
    )
}

export default Power