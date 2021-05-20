import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col } from 'react-bootstrap';
import image from './food/coffee-2608864_1280.jpg';
//import { initConsoleLogImg } from "console-log-img";

const Imagez = () => {
    // const imgEl = document.getElementById("my-img")
    // console.img(imgEl);
    return ( 
        <Container>
            <Row>
                <Col className="picz" id="my-img">
                    <img src={image} alt="images/food" width="200px" heigth="200px" />
                </Col>
                <Col className="picz">
                    images
                </Col>
                <Col className="picz">
                    images
                </Col>
                <Col className="picz">
                    images
                </Col>
            </Row>
        </Container>
     );
}
 
export default Imagez;