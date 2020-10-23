import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    state = {
        email:'',
        password: ''
    }
    handleOnChange = event => {
        const {value,name} = event.target;
        this.setState({ [name]:value });
    }
    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password:''});
    }
    render(){
        const {email,password} = this.state;
        return(
            <div className="sign-in">
                <h2>I already have an account?</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput label="email" type="email" name="email" value={email} onChange={this.handleOnChange} required/>
                    <FormInput label="password" type="password" name="password" value={password} onChange={this.handleOnChange} required/>
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">SIGN IN</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SIGN WITH GOOGLE</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;