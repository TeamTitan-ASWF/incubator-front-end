import React, {useState} from "react";

const AppContext = React.createContext({
    isValidated: false,
    setIsValidated: () => {},
});

export const AppContextProvider = ({children}) => {
    const [isValidated, setIsValidated] = useState(false);

    return (
        <AppContext.Provider value={{
            isValidated,
            setIsValidated
        }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContext;

// add this line to files to use context
//const appCtx = useContext(AppContext);