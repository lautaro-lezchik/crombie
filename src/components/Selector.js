import React from 'react'
import {  Container, } from 'react-bootstrap'
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';


const Selector = () => {
    const dispatch = useDispatch()
    const getPwr = useSelector((state)=>state.pwr)


    const handleChange = (event) => {
        dispatch({type:'SEND_UNIT', payload: event.target.checked})
    }

    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
            },
        },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], {
            duration: 200,
            }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor:
                theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
            boxSizing: 'border-box',
        },
    }));
    return (
        <div>
            <Container >
                    <FormGroup className='selectorText'>
                        <Stack direction="row" spacing={1} alignItems="center">
                            <Typography>MIN</Typography>
                            <AntSwitch disabled={getPwr} inputProps={{ 'aria-label': 'ant design' }} onChange={handleChange}/>
                            <Typography>HRS</Typography>
                        </Stack>
                    </FormGroup>
            </Container>
        </div>
    )
}

export default Selector