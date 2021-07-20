import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import * as Views from '../screens';

const { Navigator, Screen } = createStackNavigator();

const Routes: React.FC = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Home" component={Views.Home} />
  </Navigator>
);

export default Routes;
