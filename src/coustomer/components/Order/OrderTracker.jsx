import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = ["Placed", "Order Confirmed", "Shipped", "Out For Delivery", "Delivered"];

const OrderTracker = () => {
    const [activeStep, setActiveStep] = useState(0);

    return (
        <div className='w-full'>
            <Stepper activeStep={activeStep} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={index}>
                        <StepLabel sx={{ color: "#9155FD", fontSize: "44px" }}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        </div>
        
    );
}

export default OrderTracker;
