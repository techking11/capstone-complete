import { createCustomUserFromAuth, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createCustomUserFromAuth(user);
        console.log(userDocRef);
    }

    return (
        <>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
        </>
    )
}

export default SignIn;