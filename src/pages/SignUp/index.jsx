
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FormLabel, FormWrapper, FormControl, SubmitButton, FormSelect } from './styles'

function SignUpForm() {
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


        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FormLabel>Telephone</FormLabel>
          <FormControl placeholder="Telephone" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <FormLabel>Address</FormLabel>
          <FormControl placeholder="1234 Main St" />
        </Form.Group>


        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <FormLabel>City</FormLabel>
            <FormControl />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <FormLabel>Province</FormLabel>
            <FormSelect defaultValue="Choose...">
              <option disabled="disabled">Choose...</option>
              <option>Alberta</option>
              <option>British Columbia</option>
              <option>Manitoba</option>
              <option>New Brunswick</option>
              <option>Newfoundland and Labrador</option>
              <option>Northwest Territories</option>
              <option>Nova Scotia</option>
              <option>Nunavut</option>
              <option>Ontario</option>
              <option>Prince Edward Island</option>
              <option>Quebec</option>
              <option>Saskatchewan</option>
              <option>Yukon</option>
            </FormSelect>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <FormLabel>Zip</FormLabel>
            <FormControl />
          </Form.Group>
        </Row>

        <Form.Group controlId="formFile" className="mb-3">
          <FormLabel>Avatar</FormLabel>
          <Form.Control style={{fontSize: '14px'}} type="file" />
        </Form.Group>

        <SubmitButton variant="primary" type="submit">
          Submit
        </SubmitButton>
      </FormWrapper>
      <Footer />
    </div>
  );
}

export default SignUpForm;