import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";
import "./checkout.styles.scss";
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";
import PaymentForm from "../payment-form/payment.component";


const CheckOut = () => {

    // const { cartItems,cartTotal} = useContext(CartContext)
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
    return (
        <div className="checkout-container">
            <div className="checkout-header" >
                <div className="header-block" >
                    <span>Product</span>
                </div>
                <div className="header-block" >
                    <span>Description</span>
                </div>
                <div className="header-block" >
                    <span>Quantity</span>
                </div>
                <div className="header-block" >
                    <span>Price</span>
                </div>
                <div className="header-block" >
                    <span>Remove</span>
                </div>
            </div>

            {
                cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            }
            <span className="Total" >Total:${cartTotal}</span>
            <PaymentForm />
        </div>
    )
}
export default CheckOut;