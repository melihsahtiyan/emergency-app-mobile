import { createContext, useState } from "react";

export const InformationContext = createContext({
  userId: null,
  location: { latitude: null, longitude: null, altitude: null },
  setLocation: (latitude, longitude, altitude) => {},
});

function InformationProvider({ children }) {
  const [userId, setUserId] = useState(null);
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

  const setUserIdHandler = (userId) => {
    setUserId(userId);
  };

  const contextValue = {
    userId: userId,
    location: location,
    setLocation: setLocationHandler,
    setUserId: setUserIdHandler,
  };

  return (
    <InformationContext.Provider value={contextValue}>
      {children}
    </InformationContext.Provider>
  );
}

export default InformationProvider;
