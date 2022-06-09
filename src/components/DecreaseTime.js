import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';




const DecreaseTime = () => {
    const dispatch = useDispatch()
    const getPwr = useSelector((state)=>state.pwr)


    const handleClick = (event) => {
        dispatch({type:'DECREASE_TIME', payload: event.type})
        console.log(event.type);
    }
    return (
        <Button className='arrowButton' onClick={handleClick} disabled={getPwr}>
            <ArrowDropDownIcon  sx={{ color: 'white' }} />
        </Button>
            
        
    )
}

export default DecreaseTime