import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Profile} from '../screens';
import BottomTabs from './BottomTabs';
import {AppRoutes} from './types';

const Stack = createStackNavigator<AppRoutes>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Detail" component={Profile} />
    </Stack.Navigator>
  );
};

export default Main;
