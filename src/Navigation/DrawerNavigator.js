import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {COLORS, ROUTES,IMGS} from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import CustomDrawer from '../components/CustomDrawer';
import { Image, Text, TouchableOpacity,View,Platform} from 'react-native';
import SubscriptionNavigator from './SubscriptionNavigator';
import ChatBotNavigator from './ChatBotNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home,Profile} from '../screens';
import { ProfileDetails, ServiceName, ServiceId, UserToken, DataTable } from '../../store';

import AuthNavigator from './AuthNavigator';
const Drawer = createDrawerNavigator();

function DrawerNavigator({navigation}) {
  const { profileDetails } = ProfileDetails.useState((s) => s);
  console.log(profileDetails)
  return (
    <Drawer.Navigator useLegacyImplementation
      drawerContent={props => <CustomDrawer {...props} />}
         screenOptions={({ navigation }) => ({
       drawerActiveBackgroundColor: COLORS.primary,
        drawerActiveTintColor: COLORS.white,
        headerStyle: {
          backgroundColor: COLORS.primary,
          borderBottomLeftRadius:20,
          borderBottomRightRadius:20
        },
         headerLeft: () => (
              // App Logo
              <Image
                style={{
                  width: 100,
                  height: 50,
                  marginLeft:15
                }}
                source={IMGS.LOGO}
                resizeMode="contain"
              />
            ),
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.toggleDrawer()} >
            <FontIcon name="bars" size={20} color={COLORS.dark} style={{marginRight:15}} />
          </TouchableOpacity>
        ),
        headerTitle: () =>(
          <View>
          </View>
        )
      })}
      >
        {console.log(profileDetails === '',"testtttttttttttttttt")}
      <Drawer.Screen
        name={ROUTES.HOME_DRAWER}
        component={profileDetails === '' ? Profile : BottomTabNavigator}
          
        options={{
          title: 'Home',
          drawerIcon: ({focused, color, size}) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

     

      <Drawer.Screen
        name={ROUTES.CHATBOT_DRAWER}
        component={ChatBotNavigator}
        options={{
          title: 'Chat Bot',
          drawerIcon: ({focused, color, size}) => (
             <IconFontAwesome5 name="user-circle" size={18} color={color} />
          ),
        }}
      />
 <Drawer.Screen
        name={ROUTES.SUBSCRIPTION_DRAWER}
        component={SubscriptionNavigator}
        options={{
          title: 'Subscription',
          drawerIcon: ({focused, color, size}) => (
            <IconFontAwesome5 name="tasks" size={18} color={color} />
          ),
        }}
      />
     

      <Drawer.Screen
      name={ROUTES.LOGIN}
        component={AuthNavigator}
        
        options={{
          headerShown: false,
          title: 'Logout',
          drawerIcon: ({focused, color, size}) => (
           <TouchableOpacity
        onPress={() => navigation.navigate(ROUTES.LOGIN)}
       
        activeOpacity={0.8}>
        <IconMaterialCommunityIcons name="logout" size={18} color={color} />
      </TouchableOpacity>
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
