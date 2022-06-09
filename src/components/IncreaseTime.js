import React from 'react'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';


const IncreaseTime = () => {
    const dispatch = useDispatch()
    const getPwr = useSelector((state)=>state.pwr)


    const handleClick = (event) => {
        dispatch({type:'INCREASE_TIME', payload: event.type})
    }
    return (
        <Button className='arrowButton' variant='arrowButton' onClick={handleClick} disabled={getPwr}>
            <ArrowDropUpIcon sx={{ color: 'white' }}/>
        </Button>
    )
}

export default IncreaseTime





