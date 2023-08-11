import { KeyboardAvoidingView,SafeAreaView,View,Text,TouchableOpacity,StyleSheet } from 'react-native';
import React,{useEffect,useState} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {COLORS, ROUTES,IMGS} from '../../constants';
const Consult = () => {
 
  return (
    <>
     <View  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'100%'}}>
   <View>
<View style={{...styles.card,height:'50%',display:'flex',justifyContent:'center',
alignItems:'center',flexDirection:'row',fontWeight:'bold',borderRadius:20,shadowColor:COLORS.primary}}>
  <View>
  <Text  style={{...styles.text,color:COLORS.primary,fontWeight:'bold'}}>Thank You!</Text>
      <Text></Text>
      <Text style={{...styles.text,color:COLORS.primary,fontWeight:'bold'}}>
       Our Coordinator will consult you
      </Text>
      
  </View>
</View>
   </View>
    </View>
    </>
  );
};
const styles = StyleSheet.create({
    wrapper: {
      backgroundColor: 'white',
      marginBottom: 70
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent:'center',
      height:'100%'
    },
    container1: {
      flexDirection:'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      
      backgroundColor: 'white',
      borderRadius: 8,
      padding: 50,
      shadowOffset: { width: 5, height: 10 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      margin:15
    },
    text: {
      color: 'red',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign:'center'
    },
  });
export default Consult;


