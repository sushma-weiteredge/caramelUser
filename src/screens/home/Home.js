import React, {useState} from 'react';
import Field from '../../components/Field';
import Button from '../../components/Button';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image
} from 'react-native'
import {COLORS, ROUTES,IMGS} from '../../constants';
import { ProfileDetails } from '../../../store';
const Home = ({navigation}) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [mobile, setmobile] = useState('');
function UpdateHomeFunction(){
  // navigation.navigate(ROUTES.ALGORITHM)

if(name != '' && age != '' && mobile != '' ){
 navigation.navigate(ROUTES.ALGORITHM)
}
else{
  alert("Fill all the required fields")
}
}
 
  return (
    <ScrollView style={styles.wrapper}>
      
    <View style={styles.container}>
      <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
      <Field required value={name} onChangeText={setName} placeholder="Enter full name *" />
      </View>
      <View style={{width:'100%',marginBottom: 30,alignItems:'center' }}>
    <Field value={age} onChangeText={setAge} placeholder="Enter your age *" keyboardType={'numeric'} />
      </View>
      <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
      <Field value={mobile} onChangeText={setmobile} placeholder="mobile *" keyboardType={'numeric'} />
      </View>
      

      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Button textColor="white" bgColor={COLORS.primary} btnLabel="Submit" Press={UpdateHomeFunction} />
      </View>
      
     
      
    </View>

   
   
   
   
  </ScrollView>
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
export default Home;


