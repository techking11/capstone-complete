import { useState } from "react";

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
        setFormFields({...formFields, [name]: value});
        console.log(formFields);
    }
    return (
        <div className="sign-up">
            <h1>Sign up with email and password</h1>
            <form action="" onSubmit={() => {}}>
                <div className="form-group">
                    <label>Display Name</label>
                    <input type="text" required onChange={handleChange} name="displayName" value={displayName} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" required onChange={handleChange} name="email" value={email} />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" required onChange={handleChange} name="password" value={password} />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword} />
                </div>
            </form>
        </div>
    )
}

export default SignUp;