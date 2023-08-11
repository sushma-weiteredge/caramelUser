import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Subscription} from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function SubscriptionNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.SUBSCRIPTION} component={Subscription} />
       
    </Stack.Navigator>
  );
}

export default SubscriptionNavigator;
