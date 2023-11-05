// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart,removeItemToCart,clearItemFromCart } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const CheckoutItem = ({ cartItem }) => {
    const dispatch= useDispatch();
    const { name, quantity, price, imageUrl } = cartItem;
    // const { addItemToCart, removeItemToCart, clearItemFromCart } = useContext(CartContext)
    // const clearHandler = () => clearItemFromCart(cartItem)
    // const addItemHandler = () => addItemToCart(cartItem)
    // const removeItemHandler = () => removeItemToCart(cartItem)
const CartItems = useSelector(selectCartItems);

    const addItemHandler = () => dispatch(addItemToCart(CartItems,cartItem));
    const clearHandler = () => dispatch(clearItemFromCart(CartItems,cartItem));
    const removeItemHandler = () => dispatch(removeItemToCart(CartItems,cartItem));

    return (
        <div className="checkout-item-container" >
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className="name" >{name}</span>
            <span className="quantity" >
                <div className="arrow" onClick={removeItemHandler} >&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler} >&#10095;</div>
            </span>
            <span className="price" >{price}</span>
            <div className="remove-button" onClick={clearHandler} >&#10005;</div>

        </div>
    )
}

export default CheckoutItem;