import { createContext, useContext, useState } from 'react';

export const CaptainDataContext = createContext();

export const CaptainContext = ({ children }) => {
    const [captain, setCaptain] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const logoutCaptain = () => {
        setCaptain(null);
    };

    const value = {
        captain,
        isLoading,
        error,
        setCaptain,
        logoutCaptain,
    };

    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    );
};


export default CaptainContext;