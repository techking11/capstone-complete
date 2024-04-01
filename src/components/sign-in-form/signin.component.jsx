import { useState } from "react";
import {
    createCustomUserFromAuth,
    signInWithGooglePopup,
    signinUserWithGoogleEmailandPassword
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./signin.styles.scss";
import Button from "../button/button.component";

const fields = {
    email: "",
    password: ""
};


const SignIn = () => {
    const [formFields, setFormFields] = useState(fields);
    const { email, password } = formFields;
    
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        // formFields[event.target.name] = event.target.value;
    }
    
    const logGoogleUser = async () => {
        try {
            const { user } = await signInWithGooglePopup();
            const userDocRef = await createCustomUserFromAuth(user);
            console.log(userDocRef);
        } catch (error) {
            console.log(error.message);
        }
    }

    const resetFormFields = () => setFormFields(fields);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await signinUserWithGoogleEmailandPassword(email, password);
            console.log(response);
            resetFormFields();
        } catch (error) {
            switch(error.code) {
                case "auth/wrong-password":
                    alert("Password wrong");
                    break;
                default:
                    console.log("Error: " + error.message);
                    break;
            }
        }
    };
    return (
        <div className="sign-up-container">
            <h2>Already have an account ?</h2>
            <span>Sign in with email and password</span>
            <form action="POST" onSubmit={handleSubmit}>
                <FormInput 
                    label={"Email"} 
                    type="email" required 
                    onChange={handleChange} 
                    name="email" 
                    value={email} 
                />
                <FormInput 
                    label={"Password"} 
                    type="password" required 
                    onChange={handleChange} 
                    name="password" 
                    value={password} 
                />
                <div className="button-containers">
                    <Button type="submit">Sign in</Button>
                    <Button buttonType="google" onClick={logGoogleUser}>Google sign in</Button>
                </div>
            </form>
        </div>
    )
}

export default SignIn;