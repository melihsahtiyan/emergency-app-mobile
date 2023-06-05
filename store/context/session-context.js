import { createContext, useState } from "react";

export const SessionContext = createContext({
  token: null,
  setToken: (token) => {},
  email: "",
  setEmail: (email) => {},
  userId: null,
  setUserId: (userId) => {},
  location: { latitude: null, longitude: null, altitude: null },
  setLocation: (latitude, longitude, altitude) => {},
  post: null,
  setPost: (post) => {},
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

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
    altitude: null,
  });

  const setLocationHandler = ({ latitude, longitude, altitude }) => {
    setLocation({
      latitude: latitude,
      longitude: longitude,
      altitude: altitude,
    });
  };
  
  const [userId, setUserId] = useState(null);

  const setUserIdHandler = (userId) => {
    setUserId(userId);
  };

  const [post, setPost] = useState(null);

  const setPostHandler = (post) => {
    setPost(post);
  };

  const contextValue = {
    token: token,
    setToken: setTokenHandler,
    email: email,
    setEmail: setEmailHandler,
    userId: userId,
    setUserId: setUserIdHandler,
    location: location,
    setLocation: setLocationHandler,
    post: post,
    setPost: setPostHandler,
  };

  return (
    <SessionContext.Provider value={contextValue}>
      {children}
    </SessionContext.Provider>
  );
}
