import React from 'react';
import { DarkTheme, DefaultTheme, NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./screens/home-screen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import PostScreen from "./screens/PostScreen";
import { Text } from 'react-native';

export default () => {
  const Stack = createStackNavigator();
  const theme = useSelector((state: any) => state.themeReducer.theme);
  return (
    <>
      <StatusBar barStyle={theme.STATUS_BAR_STYLE}/>
      <ThemeProvider theme={theme}>
        <NavigationContainer theme={theme.mode === 'dark' ? DarkTheme : DefaultTheme}>
          <Stack.Navigator initialRouteName={'Home'}>
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="Post" component={PostScreen}/>
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  )
};
