import React from 'react'
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

function Cart({activeStep, setActiveStep}) {
  return (
    <section className="h-100">
      <MDBContainer className="py-5 h-100 w-auto" >
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol >
    
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                      alt="Cotton T-shirt" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p style={{fontSize: '25px'}}>Basic T-shirt</p>
                    
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="2"
                    className="d-flex align-items-center justify-content-around">
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
    
                    <MDBInput min={0} defaultValue={1} type="number" size="lg" />
    
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                    <MDBTypography tag="h5" style={{fontSize: '25px'}}>
                      $499.00
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-danger">
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    
            <MDBCard className="rounded-3 mb-4">
              <MDBCardBody className="p-4">
                <MDBRow className="justify-content-between align-items-center">
                  <MDBCol md="2" lg="2" xl="2">
                    <MDBCardImage className="rounded-3" fluid
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                      alt="Cotton T-shirt" />
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="3">
                    <p style={{fontSize: '25px'}}>Basic T-shirt</p>
                    
                  </MDBCol>
                  <MDBCol md="3" lg="3" xl="2"
                    className="d-flex align-items-center justify-content-around">
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="minus" />
                    </MDBBtn>
    
                    <MDBInput min={0} defaultValue={1} type="number" size="lg" />
    
                    <MDBBtn color="link" className="px-2">
                      <MDBIcon fas icon="plus" />
                    </MDBBtn>
                  </MDBCol>
                  <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                    <MDBTypography tag="h5" style={{fontSize: '25px'}}>
                      $499.00
                    </MDBTypography>
                  </MDBCol>
                  <MDBCol md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-danger">
                      <MDBIcon fas icon="trash text-danger" size="lg" />
                    </a>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
    
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
    );
}

export default Cart