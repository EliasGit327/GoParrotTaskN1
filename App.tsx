import React from 'react';
import HomeScreen from './src/screens/HomeScreen';
import {ThemeStore} from './src/stores/theme-store/theme-store';
import {Provider} from 'react-redux';

export default () => {
  return (
    <>
      <Provider store={ThemeStore}>
        <HomeScreen />
      </Provider>
    </>
  );
};
