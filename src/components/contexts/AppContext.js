import React, {useState} from "react";

const AppContext = React.createContext({
    isValidated: false,
    setIsValidated: () => {},
    user: {},
    setUser: () => {},
    isGoogleAcct: false,
    setIsGoogleAcct: () => {}
});

export const AppContextProvider = ({children}) => {
    const [isValidated, setIsValidated] = useState(localStorage.getItem("isValidated") ?? false);
    const [user, setUser] = useState((localStorage.getItem("userData")) ? JSON.parse(localStorage.getItem("userData")) : {});
    const [isGoogleAcct, setIsGoogleAccount] = useState(localStorage.getItem("isGoogleAcct") ?? false);
    
    return (
        <AppContext.Provider value={{
            isValidated,
            setIsValidated,
            user,
            setUser,
            isGoogleAcct,
            setIsGoogleAccount
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

// add this line to files to use context
//const appCtx = useContext(AppContext);