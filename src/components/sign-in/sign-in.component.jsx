import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import { signInWithGoogle } from './../../firebase/firebase2';
// import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../firebase/firebase.utils';
import { useState } from 'react';
// import { useEffect } from 'react';
import { googleSignInStart, emailSignInStart } from '../../store/user/user.action';
import { useDispatch } from 'react-redux';



const defaultFormFields = {
    email: '',
    password: '',
}


const SignIn = () => {
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields;


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            dispatch(emailSignInStart(email, password))

        } catch (error) {
            console.log('user sign in failed', error);
        }


    }

    const handleChange = event => {
        const { value, name } = event.target;

        setFormFields({ ...formFields, [name]: value })
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
    }

    // const handleGoogle = async (e)=>{
    //      e.preventDefault();
    //        try{
    //            await signInWithGoogle();
    //        }catch (err){
    //            console.log(err);
    //        }
    //    }
    // useEffect(async () => {
    //  const response = await getRedirectResult(auth);
    //  if(response){
    //     const userDocRef = await createUserDocumentFromAuth(response.user);
    //  }
    // })


    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit} >
                <FormInput
                    name="email"
                    type="email"
                    label='Email'
                    handleChange={handleChange}
                    value={email}
                    required />

                <FormInput
                    name="password"
                    type="password"
                    label='Password'
                    placeholder="Password"
                    value={password}
                    handleChange={handleChange}
                    required />
                <div className='buttons' >
                    <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base} > SIGN IN</Button>
                    <Button
                        onClick={signInWithGoogle}
                        buttonType={BUTTON_TYPE_CLASSES.google} >
                        Sign IN With Google
                    </Button>
                </div>
            </form>
        </div>
    );

}

export default SignIn;


