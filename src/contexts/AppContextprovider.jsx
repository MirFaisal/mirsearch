import { createContext, useState } from "react";
import PropTypes from "prop-types";
export const AppContext = createContext(null);

const AppContextProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  // const [searchTrem, setSearchTrem] = useState();

  // console.log(searchTrem);
  const BASE_URL = `https://google.serper.dev/`;
  const toggleTheme = () => setThemeMode(!themeMode);

  const getResult = async (quary, searchTrem) => {
    console.log(searchTrem);
    setLoading(true);
     var raw = JSON.stringify({
       q: `${quary}`,
       location: "Bangladesh",
       gl: "bd",
       num: 30,
     });
    const options = {
      method: "POST",
      body: raw,
      headers: {
        "X-API-KEY": "bf93bde8de3118426180b639f41569ad72e96ada",
        "Content-Type": "application/json",
      },
      redirect: "follow",
    };

    try {
      const response = await fetch(`${BASE_URL}images`, options);
      const result = await response.json();
      console.log(result);
      setResult(result);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const provideValue = {
    kind: "true",
    toggleTheme,
    themeMode,
    getResult,
    result,
    loading,
    
  };
  return (
    <AppContext.Provider value={provideValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
