import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";

import { PaymentFormConatiner, FormContainer } from "./payment.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const paymentHandler = async (e)=>{
        e.preventDefault();
        if(!stripe || !elements){
            return;
        }
    }
    return (
        <PaymentFormConatiner>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button buttonType={BUTTON_TYPE_CLASSES.inverted} >Pay now</Button>
            </FormContainer>
        </PaymentFormConatiner>
    )
}
export default PaymentForm;