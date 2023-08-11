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
import SelectDropdown from 'react-native-select-dropdown'
const Profile = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
function UpdateProfileFunction(){
  
if(name != '' && age != '' && gender != '' && height != '' &&
weight != '' && state != '' && address != ''){
  console.log(gender)
  ProfileDetails.update((s) => {
    s.profileDetails = 'openTabs';
  });
}
else{
  alert("Fill all the required fields")
}
}
const countries = ["Male","Female","Others"]
  return (
    <ScrollView style={styles.wrapper}>
      
    <View style={styles.container}>
      <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
      <Field required value={name} onChangeText={setName} placeholder="Enter full name *" />
      </View>
      <View style={{width:'100%',marginBottom: 30,alignItems:'center' }}>
    <Field value={age} onChangeText={setAge} placeholder="Enter your age *" keyboardType={'numeric'} />
      </View>
  
      <View style={{marginBottom:30}}>
      <SelectDropdown
	data={countries}
	onSelect={(selectedItem, index) => {
    setGender(selectedItem)
		console.log(selectedItem, index)
	}}
  buttonStyle={{ borderRadius: 15,fontSize: 20,
    borderColor: '#013D48', paddingHorizontal: 10, 
    borderWidth: 2, width:'80%', padding:10,backgroundColor:'white'}}
    buttonTextStyle={{textAlign:'left',color:"#013D48",fontSize:20,paddingLeft:0,marginLeft:0}}
    defaultButtonText='Gender *'
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
/>
      </View>
      <View style={{width:'100%',marginBottom: 30,alignItems:'center' }}>
    <Field value={height} onChangeText={setHeight} placeholder="Enter your height *" keyboardType={'numeric'} />
      </View>
      <View style={{width:'100%',marginBottom: 30,alignItems:'center' }}>
    <Field value={weight} onChangeText={setWeight} placeholder="Enter your weight *" keyboardType={'numeric'} />
      </View>
      <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
      <Field value={state} onChangeText={setState} placeholder="State *" />
      </View>
      <View style={{width:'100%', marginBottom: 30,alignItems:'center' }}>
      <Field value={address} onChangeText={setAddress} placeholder="Address *" />
      </View>

      <View style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>
        <Button textColor="white" bgColor={COLORS.primary} btnLabel="Update" Press={UpdateProfileFunction} />
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
export default Profile;


