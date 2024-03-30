import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/signin/signin.component";

const Shop = () => <h1>Shop Page</h1>;

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigation />}>
                <Route index element={<Home />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="shop" element={<Shop />} />
            </Route>
        </Routes>
    )
};

export default App