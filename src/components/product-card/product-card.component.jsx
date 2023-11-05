import "./product-card.styles.scss";

// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import Button,{BUTTON_TYPE_CLASSES} from "../button/button.component";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { useSelector } from "react-redux";


const ProductCard = ({ product }) => {
    const {name,price,imageUrl}=product;
    const dispatch = useDispatch();
    // const Product = { name, price, imageUrl };
    // const { addItemToCart } = useContext(CartContext);
    // const addProductToCart= () => addItemToCart(product)
    const cartItems = useSelector(selectCartItems);
   const addProductToCart =()=> dispatch(addItemToCart(cartItems,product));
   
    return (
        <div className="product-card-container">
            <img src={imageUrl} alt='img12' />
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button onClick={addProductToCart} buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to cart</Button>
        </div>
    )
}
export default ProductCard