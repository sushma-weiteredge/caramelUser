import { StyleSheet, Text, View, TouchableOpacity, ScrollView,RefreshControl } from 'react-native';
import React,{useEffect,useState} from 'react';

const Subscription = () => {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
 
  return (
   <View style={{padding:20}}>
    <Text>
    Subscription
    </Text>
   </View>
  );
};

export default Subscription;


