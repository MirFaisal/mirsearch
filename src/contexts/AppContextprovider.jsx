import PropTypes from "prop-types";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(false);

  const toggleTheme = () => setThemeMode(!themeMode);

  const provideValue = {
    kind: "true",
    toggleTheme,
    themeMode,
  };
  return (
    <AppContext.Provider value={provideValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
