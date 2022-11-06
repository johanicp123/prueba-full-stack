import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import fotopru from "../assets/img/1.jpg";

function Cardgro() {
    return (
      <CardGroup style={{ width: '45vh', margin:"1rem 0 1rem 0"}}>
        <Card style={{ margin:"0 .5rem 0 0"}}>
          <Card.Img variant="top" src={fotopru} />
        </Card>
        <Card style={{ margin:"0 .5rem 0 .5rem"}}>
          <Card.Img variant="top" src={fotopru} />
        </Card>
        <Card style={{ margin:"0 .5rem 0 .5rem"}}>
          <Card.Img variant="top" src={fotopru} />
        </Card>
      </CardGroup>
    );
  }
  
export default Cardgro;
