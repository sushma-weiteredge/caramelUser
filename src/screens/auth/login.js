import React, {useState} from 'react';
import Field from '../../components/Field';
import Button from '../../components/Button';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import {COLORS, ROUTES,IMGS} from '../../constants';
import {useNavigation} from '@react-navigation/native';
import { AuthStore,UserToken,UserFirstName,UserId,UserLastName,UserMobile } from "../../../store";
import axios from 'axios';
const Login = ({navigation}) => {
  //  const navigation = useNavigation();
  const [email, onChangeText] = useState('');
  const [password, onChangeNumber] = useState();


  function LoginFunction(){
    console.log(email, password)
    // navigation.navigate(ROUTES.HOME)
    if(email != '' && password != ''){
      navigation.navigate(ROUTES.HOME)

      AuthStore.update((s) => {
          s.isLoggedIn = true;
        });
    }
    else{
       alert("Please enter both Email and Password")
    } 
  }
  return (
    
      <SafeAreaView style={styles.wrapper}>
        <View style={styles.container}>
        <View>
           <Image
                style={{
                  width: 256,
                  height: 128,marginBottom:20
                }}
                source={IMGS.LOGOLOGIN}
                resizeMode="contain"
              />
        </View>
          <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
          <Field value={email} onChangeText={onChangeText} placeholder="Email" keyboardType={'email-address'}/>
          </View>
          <View style={{width:'100%',alignItems:'center' }}>
        <Field value={password} onChangeText={onChangeNumber} placeholder="Password" secureTextEntry={true}  />
          </View>
          <View style={{alignItems:'flex-end', width:'80%', paddingRight:16, marginBottom: 30}}>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
          <Text style={{color:'#013D48',fontSize:16,fontWeight:'bold'}}>
            Forgot Password ?
          </Text>
          </TouchableOpacity>
          
        </View>
        <Button textColor="#75D2B5" bgColor="#013D48" btnLabel="Login" Press={LoginFunction}/>

       
         <View style={{display:'flex',justifyContent:'center', flexDirection:'row',marginTop:30}}>
          <Text style={{marginRight:5}}>
            Don't have an account ? 
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate(ROUTES.SIGNUP)}>
            <Text style={{color:'#013D48', fontWeight:'bold'}}>
              Signup
            </Text>
          </TouchableOpacity>
        </View> 
        </View>
       
      </SafeAreaView>
   
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center'
  },
});
export default Login;
