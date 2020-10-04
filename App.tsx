import React from 'react';
import { ThemeStore } from './src/stores/theme-store/theme-store';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
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
