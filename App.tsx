import React from 'react';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';
import NavigationWrapper from "./src/NavigationWrapper";
import rootStore from "./src/redux/root-store";

export default () => {
  return (
    <>
      <Provider store={rootStore}>
        <NavigationWrapper/>
      </Provider>
    </>
  );
};
