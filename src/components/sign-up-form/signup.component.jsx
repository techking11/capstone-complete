import { useState } from "react";
import {
    createUserWithGoogleEmailandPassword,
    createCustomUserFromAuth
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";

import "./signup.styles.scss";
import Button from "../button/button.component";
import toast from "react-hot-toast";

const fields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
};


const SignUp = () => {
    const [formFields, setFormFields] = useState(fields);
    const { displayName, email, password, confirmPassword } = formFields;
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
        // formFields[event.target.name] = event.target.value;
    }

    const resetFormFields = () => setFormFields(fields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            if (password === confirmPassword) {
                const { user } = await createUserWithGoogleEmailandPassword( email, password);
                await createCustomUserFromAuth( user, { displayName });
                resetFormFields();
                toast.success('Successfully signed up !');
            } else toast.error('Password not match !');
            
        } catch (error) {
            switch (error.code) {
                case "auth/weak-password":
                    toast.error("Password should be more than 6 characters !");
                    break;
                case "auth/email-already-in-use":
                    toast.error("Cannot create a user, email already in use !");
                    break;
                default:
                    toast.error("Error: " + error.message + " !");
                    break;
            }

        }
    };
    return (
        <div className="sign-up-container">
            <h2>Don&rsquo;t have an account ?</h2>
            <span>Sign up with email and password</span>
            <form action="POST" onSubmit={handleSubmit}>
                <FormInput
                    label={"Display Name"}
                    type="text" required
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                />
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
                <FormInput
                    label={"Confirm Password"}
                    type="password" required
                    onChange={handleChange}
                    name="confirmPassword"
                    value={confirmPassword}
                />
                <Button type="submit">Sign up</Button>
            </form>
        </div>
    )
}

export default SignUp;