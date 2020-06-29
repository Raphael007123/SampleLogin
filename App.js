import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeStack from './app/navigation/WelcomeStack';
import {Provider} from 'react-redux';
import {store} from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <WelcomeStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
