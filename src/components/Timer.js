import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import '../fonts/DS-DIGI.TTF'
import { useSelector } from "react-redux"


const Timer = () => {
    const getValue = useSelector((state)=>state.value)
    const getUnit = useSelector((state)=>state.unit)
    const getPwr = useSelector((state)=>state.pwr)
    console.log(getPwr);

    return (
        <Container className='timerContainer'>
            <div style={getPwr ? {opacity: 0} : {}} className='timerContainer'>
                <Row>
                    <Col sm={4}>
                        <AccessTimeIcon className='accessTimeIcon'/>
                    </Col>
                    <Col sm={8}>
                        <p className='time'>{getValue} <span className='unit'>{getUnit}</span></p>
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default Timer