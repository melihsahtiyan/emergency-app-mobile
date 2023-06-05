import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "./theme/ThemeProvider";
import Profile from "./pages/Profile";
import Contacts from "./pages/Contacts";
import Report from "./pages/Report";
import ChatBot from "./pages/ChatBot";
import { SessionContext, SessionProvider } from "./session/SessionProvider";
import ReportDetail from "./pages/ReportDetail";

const Stack = createStackNavigator();

export default App = () => {
  const { token, setToken } = useContext(SessionContext);

  return (
    <>
      <SessionProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {token ? (
                <>
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Profile" component={Profile} />
                  <Stack.Screen name="Contacts" component={Contacts} />
                </>
              ) : (
                <>
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
                  <Stack.Screen name="Profile" component={Profile} />
                  <Stack.Screen name="Home" component={Home} />
                  <Stack.Screen name="Contacts" component={Contacts} />
                  <Stack.Screen name="Report" component={Report} />
                  <Stack.Screen name="ReportDetail" component={ReportDetail} />
                  <Stack.Screen name="ChatBot" component={ChatBot} />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </ThemeProvider>
      </SessionProvider>
    </>
  );
};
