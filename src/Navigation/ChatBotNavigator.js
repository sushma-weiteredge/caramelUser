import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ChatBot,Consult} from '../screens';
import {ROUTES} from '../constants';

const Stack = createStackNavigator();

function ChatBotNavigator() {
  console.log(Stack);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ROUTES.LOGIN}>
      <Stack.Screen name={ROUTES.CHATBOT} component={ChatBot} />
      <Stack.Screen name={ROUTES.CONSULT} component={Consult} />
    </Stack.Navigator>
  );
}

export default ChatBotNavigator;
