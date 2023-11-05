import './App.css';
import { React, useEffect } from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// import { createUserDocumentFromAuth, onAuthSutateChangeListener, getCurrentUser } from "./firebase/firebase.utils";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckOut from './components/checkout/checkout.component';
import Navigation from './components/navigation/navigation.component';
import { checkUserSession } from './store/user/user.action';


const App = () => {
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const unsubscribe = onAuthSutateChangeListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     dispatch(setCurrentUser(user));
  //   })
  //   return unsubscribe;
  // },[dispatch])

  useEffect(() => {
    dispatch(checkUserSession());
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          
          <Route path='/' element={<HomePage />} />
          <Route path='shop/*' element={<ShopPage />} />
          <Route path='signin' element={<SignInAndSignUpPage />} />
          <Route path='checkout' element={<CheckOut />} />

        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;