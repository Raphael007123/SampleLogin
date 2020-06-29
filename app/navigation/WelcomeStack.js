import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Register from '../screens/Register';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const Stack = createStackNavigator();

function WelcomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default WelcomeStack;
