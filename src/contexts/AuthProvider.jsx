import { createContext, useState, useEffect, useMemo } from "react";
import { fetchGet } from "../utils/fetchUtils";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState({});

  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {
    const abortController = new AbortController();

    const fetchUser = async (token) => {
      const signal = abortController.signal;
      try {
        // TODO: Fix this to use the jwt-decode instead
        const response = await fetchGet("authors/token", signal, token);
        const jsonData = await response.json();
        setUser(jsonData.output);
      } catch (error) {
        if (!error.name === "AbortError") {
          console.error(error.message);
          setUser({});
        }
      }
    };

    if (token) {
      localStorage.setItem("token", token);
      fetchUser(token);
    } else {
      localStorage.removeItem("token");
      setUser({});
    }

    return () => abortController.abort();
  }, [token]);

  const contextValue = useMemo(
    () => ({ token, setToken, user }),
    [token, user]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
