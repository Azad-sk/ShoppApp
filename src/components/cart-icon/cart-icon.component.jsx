import {ItemCount,CartIconContainer,ShoppingIcon} from "./cart-icon.styles.jsx";
// import { ReactComponent as ShoppingIcon } from "./../../assets/shopping-bag.svg"
// import { useContext } from "react";
// import { CartContext } from "../../context/cart.context";
import { useDispatch,useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action.js";
import { selectCartCount,selectISCartOpen } from "../../store/cart/cart.selector.js";
const CartIcon = () => {
   const dispatch = useDispatch();
//   const {isCartOpen,setIsCartOpen,cartCount}= useContext(CartContext);
//   const toggleIsOpen =()=>setIsCartOpen(!isCartOpen)
const toggleIsOpen=()=>dispatch(setIsCartOpen(!isCartOpen));
const isCartOpen = useSelector(selectISCartOpen)
const cartCount = useSelector(selectCartCount);
   return (
      <CartIconContainer onClick={toggleIsOpen}>

         <ShoppingIcon />
         <ItemCount>{cartCount}</ItemCount>

      </CartIconContainer>
   )
};
export default CartIcon;