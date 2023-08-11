/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import Raect,{useState} from 'react'
import Field from '../../components/Field'
import Button from '../../components/Button'
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

const SignUp = ({navigation}) => {
  const [email, onChangeText] = useState('');
  const [password, onChangeNumber] = useState();
  const [Confirmpassword, onChangeConfirmPassword] = useState();
  const [mobile, onChangeMobile] = useState('');

  function SignUpFunction(){
    console.log(email, password,Confirmpassword)
   
    if(email != '' && password != ''){
      if(password === Confirmpassword){

        navigation.navigate(ROUTES.LOGIN)
  
      }
      else{
        alert("Password and Confirm Password doesn't match ")
      }
    }
    else{
       alert("Please enter both Email and Password")
    } 
  }
  SignUpFunction



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
        <View style={{ width: '100%', marginBottom: 30, alignItems: 'center' }}>
          <Field value={email} onChangeText={onChangeText} placeholder="Email" keyboardType={'email-address'} />
        </View>
        <View style={{ display: 'flex',marginBottom: 30, justifyContent: 'center', flexDirection: 'row', marginTop: 10 }}>
        <Field value={mobile} onChangeText={onChangeMobile} placeholder="Mobile Number" keyboardType={'numeric'} />
      </View>
        <View style={{ width: '100%',marginBottom: 30, alignItems: 'center' }}>
          <Field value={password} onChangeText={onChangeNumber} placeholder="Password" secureTextEntry={true} />
        </View>
       
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Field value={Confirmpassword} onChangeText={onChangeConfirmPassword} placeholder="Confirm Password" secureTextEntry={true} />
        </View>
        <View
          style={{
            alignItems: 'flex-end',
            width: '80%',
            paddingRight: 16,
            marginBottom: 30
          }}
        >
          
        </View>
        <Button textColor="white" bgColor="#013D48" btnLabel="SignUp" Press={SignUpFunction}/>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            marginTop: 30
          }}
        >
          <Text style={{ marginRight: 5 }}>Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={{ color: '#013D48', fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default SignUp
