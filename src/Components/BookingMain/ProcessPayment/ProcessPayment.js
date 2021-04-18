import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IelztJ6hpH0jxrJZfMue9QcLGbHN0RWS6qpIwHOrUIAH1okir67GbDL0WXwulsYz1Vh4RGUgNgPPnp3OlinfM5Q00DA85Rl4K');

const ProcessPayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <SimpleCardForm handlePayment={handlePayment} ></SimpleCardForm>
        </Elements>
    );
};

export default ProcessPayment;