import React, {useState} from "react";

const AppContext = React.createContext({
    isValidated: false,
    setIsValidated: () => {},
    user: {},
    setUser: () => {}
});

export const AppContextProvider = ({children}) => {
    const [isValidated, setIsValidated] = useState(false);
    const [user, setUser] = useState({});
    
    return (
        <AppContext.Provider value={{
            isValidated,
            setIsValidated,
            user,
            setUser
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

// add this line to files to use context
//const appCtx = useContext(AppContext);