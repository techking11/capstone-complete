import { Toaster } from "react-hot-toast";
import SignIn from "../../components/sign-in-form/signin.component";
import SignUp from "../../components/sign-up-form/signup.component";
import "./auth.style.scss";

const Authentication = () => {
    return (
        <div className="auth-containers">
            <Toaster position="top-right" />
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication;