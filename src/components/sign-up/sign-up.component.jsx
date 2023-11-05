import React from "react";
import FormInput from "../form-input/form-input.component";
import './sign-up.styles.scss';
import { useState } from "react";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../../firebase/firebase.utils";
import Button,{ BUTTON_TYPE_CLASSES } from "../button/button.component";
import { useDispatch } from "react-redux";
import { signUpStart } from "../../store/user/user.action";



const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
   const dispatch = useDispatch()
    const [formFields, setFormFields] = useState(defaultFormFields)

    const { displayName, email, password, confirmPassword } = formFields;
     


    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert('password not match')
            return;
        }
        try{
          dispatch(signUpStart(displayName, email, password,))

        } catch(error){
            if(error.code === 'auth/email-already-in-use'){
                alert('cannot create user,email is already used')
            }
           console.error(error);
        }
    }


    return (
        <div className='sign-up' >
            <h2 className='title' >I do not have a account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form ' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirmPassword'
                    required
                />
                <Button type='submit' buttonType={BUTTON_TYPE_CLASSES.base} >Sign Up</Button>
            </form>
        </div>
    )

}

export default SignUp;