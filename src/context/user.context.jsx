import { useState, createContext, useEffect } from "react";
import { createCustomUserFromAuth, onAuthStateChangeedListener } from "../utils/firebase/firebase.utils";

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    
    useEffect(() => {
        // const unsubscribe = 
        onAuthStateChangeedListener((user)=> {
            if (user) createCustomUserFromAuth(user);
            setCurrentUser(user);
        });
        // return unsubscribe;
    }, []);
    
    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
};