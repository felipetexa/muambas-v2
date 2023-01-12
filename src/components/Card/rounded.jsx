import Card from 'react-bootstrap/Card';
import { CardWrapper } from './styles';


function RoundedCard() {
  return (
    <CardWrapper>
    <Card className="bg-dark text-white" style={{borderRadius: '500rem', width: '25rem', height: '25rem' }}>
      <Card.Img style={{borderRadius: '500rem', width: '25rem', height: '25rem', opacity: '10%'}} src={require("../../assets/images/ps5.jpeg")} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title style={{ textAlign: 'center', marginTop: '15rem', fontSize: '3rem' }}>Video Games</Card.Title>
      </Card.ImgOverlay>
    </Card>
    </CardWrapper>
  );
}

export default RoundedCard;