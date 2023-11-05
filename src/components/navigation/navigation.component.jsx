import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import './navigation.styles.scss';

import { ReactComponent as Logo } from './../../assets/crown.svg';
// import { signOutUser } from '../../firebase/firebase.utils';
// import { CartContext } from '../../context/cart.context';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../store/user/user.selector';
import { selectISCartOpen } from '../../store/cart/cart.selector';
import { useDispatch } from 'react-redux';
import { signOutStart } from '../../store/user/user.action';

const Navigation = () => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser);
  // const { isCartOpen } = useContext(CartContext);
  const isCartOpen = useSelector(selectISCartOpen)
  
  const signOutUser = () =>dispatch(signOutStart())
  

  return (
    <div className='header'>
      <Link to="/" className='logo-container'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {
          currentUser ?
            (<div className="option" onClick={signOutUser}   >SIGN OUT</div>)
            :
            (<Link className="option" to='/signin'>SIGN IN</Link>)
        }
        <CartIcon />
      </div>
      {isCartOpen && <CartDropdown />}
    </div>
  )
}


export default Navigation;
