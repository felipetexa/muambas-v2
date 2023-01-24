import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Cart from './Cart'
import Payment from './Payment';
import Confirmation from './Confirmation';


export default function ShoppingCart() {
  const [activeStep, setActiveStep] = React.useState(0);
  
  const steps = ['Your Cart', 'Payment', 'Purchase Complete'];

  const componentsList = [
    <Cart 
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />,
    <Payment
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />,
    <Confirmation 
      activeStep={activeStep}
      setActiveStep={setActiveStep}
    />

  ]

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
    <Header />
    <Box sx={{ width: '60%', marginBlock: '100px' }}>
      <Stepper sx={{ marginBottom: '50px' }} activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step sx={{'& .MuiSvgIcon-root': {fontSize: '40px'}}} key={label} {...stepProps}>
              <StepLabel sx={{ '.MuiStepLabel-label': {fontSize: '12px'} }} {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1, fontSize: 'large' }}>
            Thank you for choosing us! After your payment gets approved, we'll send your items!
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleReset}>Purchases Summary</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ mt: 2, mb: 1 }}>{componentsList[activeStep]}</Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
    <Footer />
    </div>
  );
}