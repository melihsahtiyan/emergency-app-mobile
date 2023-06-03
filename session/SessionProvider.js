import { createContext, useState } from "react";

const SessionContext = createContext(false);

const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");

  const setTokenHandler = (token) => {
    setToken(token);
  };

  const setEmailHandler = (email) => {
    setEmail(email);
  };

  return (
    <SessionContext.Provider
      value={{
        token: token,
        setToken: setToken,
        email: email,
        setEmail: setEmail,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
