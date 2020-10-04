import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import { ThemeStore } from './src/stores/theme-store/theme-store';
import { Provider, useSelector } from 'react-redux';
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context"
import NavigationWrapper from "./src/NavigationWrapper";

export default () => {

  return (
    <>
      <Provider store={ThemeStore}>
        <NavigationWrapper/>
      </Provider>
    </>
  );
};
