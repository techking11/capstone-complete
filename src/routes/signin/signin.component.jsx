import { createCustomUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        createCustomUserFromAuth(user);
    }

    return (
        <>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </>
    )
}

export default SignIn;