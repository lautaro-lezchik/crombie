import Card from '@mui/material/Card';
import { Col, Row, Container } from 'react-bootstrap';
import Arrows from './components/Arrows';
import Power from './components/Power';
import Selector from './components/Selector';
import TimeSlider from './components/TimeSlider';
import Timer from './components/Timer';


function App() {
  return (
    <>
      <Container className='generalContainer'>
        <Card sx={{ maxWidth: 800 }} className='containerCard'>
              <Row>
                <Col sm={8}>
                  <Timer />
                </Col>
                <Col sm={4}>
                  <Row className='arrowsRow'>
                    <Arrows />
                  </Row>
                  <Row>
                    <Power />
                  </Row>
                </Col>
              </Row>
              <Row className='selectorSliderRow'>
                <Col sm={4}>
                  <Selector />
                </Col>
                <Col sm={8}>
                  <TimeSlider />
                </Col>
              </Row>
        </Card>
      </Container>
    </>
  );
}

export default App;
