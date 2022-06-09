import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';


const TimeSlider = () => {
    const dispatch = useDispatch()
    const getValue = useSelector((state)=>state.value)
    const getPwr = useSelector((state)=>state.pwr)



    const sendValue = (value) => {
        dispatch({type:'SEND_VALUE', payload: value.target.value})
    }
    
    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: 10,
            label: '10',
        },
        {
            value: 20,
            label: '20',
        },
        {
            value: 30,
            label: '30',
        },
        {
            value: 40,
            label: '40',
        },
        {
            value: 50,
            label: '50',
        },
        {
            value: 60,
            label: '60',
        },
        {
            value: 70,
            label: '70',
        },
        {
            value: 80,
            label: '80',
        },
        {
            value: 90,
            label: '90',
        },
        {
            value: 100,
            label: '100',
        },
    ];


    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Temperature"
                defaultValue={getValue}
                marks={marks}
                onChange={sendValue}
                value={getValue}
                disabled={getPwr}
            />
        </Box>
    )
}

export default TimeSlider