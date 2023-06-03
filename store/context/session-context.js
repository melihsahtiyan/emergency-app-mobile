import { createContext, useState } from "react";

export const SessionContext = createContext({
  token: null,
  setToken: (token) => {},
  email: "",
  setEmail: (email) => {},
});

function SessionProvider({ children }) {
  const [token, setToken] = useState(null);

  const setTokenHandler = (token) => {
    setToken(token);
  };

  const [email, setEmail] = useState("");

  const setEmailHandler = (email) => {
    setEmail(email);
  };

  const contextValue = {
    token: token,
    setToken: setTokenHandler,
    email: email,
    setEmail: setEmailHandler,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}
