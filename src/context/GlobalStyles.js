import React, { createContext } from 'react';

export const GlobalStylesContext = createContext();

export const GlobalStylesProvider = ({ children }) => {
    // Font-specific style objects
    const montFont = {
        fontFamily: "'Mont', sans-serif",
    };

    const quicksandFont = {
        fontFamily: "'Quicksand', sans-serif",
    };

    const lihamFont = {
        fontFamily: "'Liham', sans-serif",
    };

    // Other global styles
    const darkBlue = {
        color: "#2F6A87",
    };

    const mediumBlue = {
        color: "#6EB2CC",
    };

    const lightBlue = {
        color: "#EBFFFF",
    };

    const white = {
        color: "#FFFFFF",
    };

    const black = {
        color: "#000000",
    };

    const mediumBlueBackground = {
        backgroundColor: "#6EB2CC",
    }

    return (
        <GlobalStylesContext.Provider
            value={{
                fonts: { montFont, quicksandFont, lihamFont },
                colors: { darkBlue, mediumBlue, lightBlue, white, black },
                background: { mediumBlueBackground }
            }}
        >
            {children}
        </GlobalStylesContext.Provider>
    );
};