import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CardWrapper } from './styles';

function CustomCard() {
  return (
    <CardWrapper>
      <Card style={{ width: '25rem' }}>
        <Card.Img style={{ padding: '1rem' }} variant="top" src={require("../../assets/images/ps5.jpeg")} />
        <Card.Body style={{ margin: '0' }}>
          <Card.Title as='h2'>PlayStation 5</Card.Title>
          <Card.Text style={{ fontSize: '1.5rem' }}>
            $649.99
          </Card.Text>
        </Card.Body>
          <Button style={{ fontSize: '2rem', width: '24.8rem', padding: '0', borderRadius: '0 0 0.2rem 0.2rem' }}variant="primary">Buy</Button>
      </Card>
    </CardWrapper>
  );
}

export default CustomCard;