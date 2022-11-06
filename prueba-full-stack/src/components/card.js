import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import fotopru from "../assets/img/1.jpg";


function CardBo() {
  return (

    <Card style={{ width: '75vh' }}>
      <Card.Img variant="top" src={fotopru} />
    </Card>
  
   
    
  );
}

export default CardBo;

