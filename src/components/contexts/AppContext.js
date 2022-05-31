import React, {useState} from "react";

const AppContext = React.createContext({
    isValidated: false,
    setIsValidated: () => {},
    userId: null,
    setUserId: () => {},
    userName : null,
    setUserName : () => {},
});

export const AppContextProvider = ({children}) => {
    const [isValidated, setIsValidated] = useState(false);
    const [userId,setUserId] = useState(null);
    const [userName, setUserName] = useState(null)

    return (
        <AppContext.Provider value={{
            isValidated,
            setIsValidated,
            userId,
            setUserId,
            userName,
            setUserName
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

// add this line to files to use context
//const appCtx = useContext(AppContext);