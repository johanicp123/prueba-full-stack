import Card from 'react-bootstrap/Card';
import fotopru from "../assets/img/1.jpg";


function CardBo1() {
  return (

    <Card style={{ width: '5vh' , height:"15vh" }}>
      <Card.Img variant="top" src={fotopru} />
    </Card>
  
   
    
  );
}

export default CardBo1;

