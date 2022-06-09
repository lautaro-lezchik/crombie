import Card from '@mui/material/Card';
import { Col, Row } from 'react-bootstrap';
import Arrows from './components/Arrows';
import Power from './components/Power';
import Selector from './components/Selector';
import TimeSlider from './components/TimeSlider';
import Timer from './components/Timer';


function App() {
  return (
    <>
      <Card sx={{ maxWidth: 800 }} className='containerCard'>
            <Row>
              <Col>
                <Timer />
              </Col>
              <Col>
                <Row>
                  <Arrows />
                </Row>
                <Row>
                  <Power />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <Selector />
              </Col>
              <Col>
                <TimeSlider />
              </Col>
            </Row>
      </Card>
    </>
  );
}

export default App;
