import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home,Profile,Algorithm,ChatBot} from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function TasksNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.HOME} component={Home} />
      <Stack.Screen name={ROUTES.PROFILE} component={Profile} />
      <Stack.Screen name={ROUTES.ALGORITHM} component={Algorithm} />
      <Stack.Screen name={ROUTES.CHATBOT} component={ChatBot} />

    </Stack.Navigator>
  );
}

export default TasksNavigator;
