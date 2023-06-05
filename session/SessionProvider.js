import { createContext, useState } from "react";

const SessionContext = createContext(false);

const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);
  const [post, setPost] = useState(null);
  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    altitude: null,
  });
  
  const setTokenHandler = (token) => {
    setToken(token);
  };

  const setEmailHandler = (email) => {
    setEmail(email);
  };

  const setUserIdHandler = (userId) => {
    setUserId(userId);
  };

  const setLocationHandler = ({ latitude, longitude, altitude }) => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
      altitude: altitude,
    });
  };
  
  const setPostHandler = (post) => {
    setPost(post);
  };

  return (
    <SessionContext.Provider
      value={{
        token: token,
        setToken: setToken,
        email: email,
        setEmail: setEmail,
        userId: userId,
        setUserId: setUserId,
        location: location,
        setLocation: setLocation,
        post: post,
        setPost: setPost,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export { SessionContext, SessionProvider };
