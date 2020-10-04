import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";

export default () => {
  const Stack = createStackNavigator();
  const theme = useSelector((state: any) => state.theme);

  return (
    <>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE}/>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={theme.mode === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
};
