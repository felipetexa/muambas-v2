import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
  } from "mdb-react-ui-kit";

function Payment({activeStep, setActiveStep}) {
  return (
    
    <MDBCol lg="5">
                <MDBCard className="rounded-3">
                  <MDBCardBody style={{padding: '30px'}}>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <MDBTypography tag="h5" style={{fontSize: '35px'}}>
                        Card details
                      </MDBTypography>
                      <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                        fluid className="rounded-3" style={{ width: "45px" }} alt="Avatar" />
                    </div>

                    <p style={{fontSize: '25px', marginLeft: '5px', marginBottom: '5px'}}>Card type</p>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-mastercard fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-visa fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-amex fa-2x me-2" />
                    </a>
                    <a href="#!" type="submit" className="text-white">
                      <MDBIcon fab icon="cc-paypal fa-2x me-2" />
                    </a>

                    <form className="mt-4">
                      <label style={{fontSize: '25px', marginLeft: '5px', marginBottom: '5px'}}>Cardholder's Name</label>
                      <MDBInput className="mb-5" type="text" size="lg" style={{fontSize: '15px'}}
                        placeholder="Cardholder's Name" contrast />
                      <label style={{fontSize: '25px', marginLeft: '5px', marginBottom: '5px'}}>Card Number</label>
                      <MDBInput className="mb-5" type="text" size="lg" style={{fontSize: '15px'}}
                        minLength="19" maxLength="19" placeholder="1234 5678 9012 3457" contrast />

                      <MDBRow className="mb-4">
                        <MDBCol md="6">
                        <label style={{fontSize: '25px', marginLeft: '5px', marginBottom: '5px'}}>Expiration</label>
                          <MDBInput className="mb-4" type="text" size="lg" style={{fontSize: '15px'}}
                            minLength="7" maxLength="7" placeholder="MM/YYYY" contrast />
                        </MDBCol>
                        <MDBCol md="6">
                        <label style={{fontSize: '25px', marginLeft: '5px', marginBottom: '5px'}}>CVV</label>
                          <MDBInput className="mb-4" type="text" size="lg" minLength="3" style={{fontSize: '15px'}}
                            maxLength="3" placeholder="&#9679;&#9679;&#9679;" contrast />
                        </MDBCol>
                      </MDBRow>
                    </form>

                    <hr />

                    <div className="d-flex justify-content-between">
                      <p style={{fontSize: '25px'}}>Subtotal</p>
                      <p style={{fontSize: '25px', fontWeight: '500'}}>$4798.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p style={{fontSize: '25px'}}>Shipping</p>
                      <p style={{fontSize: '25px', fontWeight: '500'}}>$20.00</p>
                    </div>

                    <div className="d-flex justify-content-between">
                      <p style={{fontSize: '25px'}}>Total(Incl. taxes)</p>
                      <p style={{fontSize: '25px', fontWeight: '500'}}>$4818.00</p>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
  )
}

export default Payment