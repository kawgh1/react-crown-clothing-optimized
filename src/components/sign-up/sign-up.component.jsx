import React from 'react'
import './sign-up.styles.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

// FIREBASE
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {

    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        // so similar to Google firebase authentication, except this way we are actually creating it

        const {displayName, email, password, confirmPassword } = this.state;

        if(password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }

        try {
            // create new user in firestore database
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // get that user back as a userAuth, wait for confirmation before proceeding to update state
            await createUserProfileDocument(user, { displayName });

            // since we're just creating the user in firestore database, we need to clear state
            // and direct them to Sign in after signing up

            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        });


        } catch (error) {
            console.log('error signing up', error.message);
        }

    };

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({[name]: value});

    };

    render() {
        const {displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password!</span>

                <form className='sign-up-form' onSubmit={ this.handleSubmit} >

                    <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={this.handleChange}
                    label='Display Name'
                    required 

                    />

                    <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={this.handleChange}
                    label='Email'
                    required 

                    />

                    <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={this.handleChange}
                    label='Password'
                    required 

                    />

                    <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={this.handleChange}
                    label='Confirm Password'
                    required 

                    />

                    <CustomButton type='submit'>SIGN UP</CustomButton>

                </form>
            </div>
        );
    }
}

export default SignUp;