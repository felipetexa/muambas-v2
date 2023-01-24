
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FormLabel, FormWrapper, FormControl, SubmitButton, RememberForgot } from './styles'
import Nav from 'react-bootstrap/Nav';

function SignInForm() {
  return (
    <div>
      <Header />
      <FormWrapper>
        <Col className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <FormLabel>Email</FormLabel>
            <FormControl type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password" placeholder="Password" />
          </Form.Group>
        </Col>

        <RememberForgot>
        <Form.Group style={{marginLeft: 0}} className="mb-3" controlId="formBasicCheckbox">
          <Form.Check  style={{fontSize: '23px'}} type="checkbox" label="Remember me" />
        </Form.Group>
        <Nav.Link style={{fontSize: '15px', textAlign: 'right', margin: 0}} eventKey="link-1">Forgot Password?</Nav.Link>
        </RememberForgot>

        <SubmitButton variant="primary" type="submit">
          Login
        </SubmitButton>
      </FormWrapper>
      <Footer />
    </div>
  );
}

export default SignInForm;