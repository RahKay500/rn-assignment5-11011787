    import React, { createContext, useState, useContext, useMemo } from 'react';

    const ThemeContext = createContext();

    export const ThemeProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    const value = useMemo(() => ({ isDarkTheme, toggleTheme }), [isDarkTheme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
        {children}
        </ThemeContext.Provider>
    );
    };

    export const useTheme = () => useContext(ThemeContext);
