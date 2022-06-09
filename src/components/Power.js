import React from 'react'
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


const Power = () => {
    const dispatch = useDispatch()
    const getPwr = useSelector((state)=>state.pwr)


    const handleClick = (event) => {
        dispatch({type:'POWER', payload: event.type})
        console.log(event.type);
    }

    const conditionalStyle = getPwr ? {backgroundColor: "gray"} :{backgroundColor: "white"}

    return (
        <Button className='pwrButton' variant='pwrButton' onClick={handleClick}>
            <div className='circle' style={conditionalStyle}></div>
            PWR
        </Button>
    )
}

export default Power