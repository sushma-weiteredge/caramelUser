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
  Image,
  Card,
} from 'react-native'
import {COLORS, ROUTES,IMGS} from '../../constants';
import { RadioButton, Title } from 'react-native-paper';
// import RNSpeedometer from 'react-native-speedometer'

const Algorithm = ({navigation}) => {
  const [BMI, setBMI] = useState(null);
  const [WCM, setWCM] = useState(null);
  const [WCF, setWCF] = useState(null);
  const [Smoker, setSmoker] = useState(null);
  const [SBP, setSBP] = useState(null);
  const [DBP, setDBP] = useState(null);
  const [FastingBS, setFastingBS] = useState(null);
  const [RandomBS, setRandomBS] = useState(null);
  const [TC, setTC] = useState(null);
  const [LDL, setLDL] = useState(null);
  const [TG, setTG] = useState(null);
  const [HistoryBrainStroke, setHistoryBrainStroke] = useState(null);
  const [PhysicalActiveness, setPhysicalActiveness] = useState(null);
  const [SGOT, setSGOT] = useState(null);

  const [SuccessPage, setSuccessPage] = useState(false);
  const [Score, setScore] = useState('');
  const [Percentage, setPercentage] = useState(0);
  const [Color, setColor] = useState('');

  

function UpdateAlgorithmFunction(){
  
  var count=0
if(BMI != null && (WCM != null || WCF != null) && Smoker != null && (SBP != null || DBP != null) && 
(FastingBS != null || RandomBS != null ) || (TC != null || LDL != null || TG != null) && 
HistoryBrainStroke != null && PhysicalActiveness != null && SGOT != null){
 if(BMI === "yes" || (WCF === "yes" || WCM === "yes")){
  count = count+3
 }
 if(Smoker === "yes"){
  count = count+3
 }
 if(SBP === "yes" || DBP === "yes"){
  count = count+3
 }
 if(FastingBS === "yes" || RandomBS === "yes"){
  count = count+2
 }
 if(TC === "yes" || LDL === "yes" || TG === "yes"){
  count = count+2
 }
 if(HistoryBrainStroke === "yes"){
  count = count+2
 }
 if(PhysicalActiveness === "yes"){
  count = count+3
 }
 if(SGOT === "yes"){
  count = count+2
 }

 console.log(count)

if(count <= 2){
  setSuccessPage(true)
  setScore("Low Risk of CARAMEL")
  setColor("green")
  const percent = (count/20)*100
  setPercentage(percent)
}
if(count > 2 && count <= 5){
  setSuccessPage(true)
  setScore("Moderate Risk of CARAMEL")
  setColor("yellow")
  const percent = (count/20)*100
  setPercentage(percent)
}
if(count > 5 && count <= 10){
  setSuccessPage(true)
  setScore("High Risk of CARAMEL")
  setColor("orange")
  const percent = (count/20)*100
  setPercentage(percent)
}
if(count > 10){
  setSuccessPage(true)
  setScore("Very High Risk of CARAMEL")
  setColor("red")
  const percent = (count/20)*100
  setPercentage(percent)
}


}
else{
  alert("Answer all the questions")
}
}
 
  return (
    <>
   {
    SuccessPage === false ?
    <>
    <ScrollView style={styles.wrapper}>
      <View style={{ padding: 8 }}>
      <Title>BMI{" >"} 27.5?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={BMI === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setBMI('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={BMI === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setBMI('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>Waist Circumference {" >"} 90 CM ? (Males)</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={WCM === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setWCM('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={WCM === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setWCM('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8}}>
      <Title>Waist Circumference {" >"} 80 CM ? (Females)</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={WCF === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setWCF('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={WCF === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setWCF('no')}
        />
        <Text>No</Text>
      </View>
    </View>
    
    <View style={{ paddingHorizontal: 8 }}>
      <Title>Smoker ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={Smoker === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setSmoker('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={Smoker === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setSmoker('no')}
        />
        <Text>No</Text>
      </View>
    </View>
    <Title style={{ paddingHorizontal: 8 }}>HTN History</Title>
    <View style={{ paddingHorizontal: 8 }}>
      <Title>SBP{" >"} 140 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={SBP === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setSBP('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={SBP === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setSBP('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>DBP{" >"} 90 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={DBP === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setDBP('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={DBP === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setDBP('no')}
        />
        <Text>No</Text>
      </View>
    </View>
    <Title style={{ paddingHorizontal: 8 }}>DM2 /PREDIABETES</Title>
    <View style={{ paddingHorizontal: 8 }}>
      <Title>Fasting Blood Sugar{" >"} 100 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={FastingBS === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setFastingBS('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={FastingBS === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setFastingBS('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>Random Blood Sugar{" >"} 140 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={RandomBS === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setRandomBS('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={RandomBS === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setRandomBS('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>TC{" >"} 200 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={TC === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setTC('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={TC === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setTC('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>LDL{" >"} 130 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={LDL === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setLDL('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={LDL === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setLDL('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>TG{" >"} 200 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={TG === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setTG('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={TG === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setTG('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>Family history of brain stroke/ CAD/ CKD ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={HistoryBrainStroke === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setHistoryBrainStroke('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={HistoryBrainStroke === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setHistoryBrainStroke('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ padding: 8 }}>
      <Title>Sedentary life style/ Physically inactive?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={PhysicalActiveness === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setPhysicalActiveness('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={PhysicalActiveness === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setPhysicalActiveness('no')}
        />
        <Text>No</Text>
      </View>
    </View>
    <Title style={{ paddingHorizontal: 8 }}>Fatty liver</Title>
    <View style={{ paddingHorizontal: 8 }}>
      <Title>SGOT{" >"} 40 ?</Title>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="yes"
          status={SGOT === 'yes' ? 'checked' : 'unchecked'}
          onPress={() => setSGOT('yes')}
        />
        <Text>Yes</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <RadioButton
          value="no"
          status={SGOT === 'no' ? 'checked' : 'unchecked'}
          onPress={() => setSGOT('no')}
        />
        <Text>No</Text>
      </View>
    </View>

    <View style={{ display: 'flex',marginVertical:10, justifyContent: 'center', flexDirection: 'row' }}>
        <Button textColor="white" bgColor={COLORS.primary} btnLabel="Calculate" Press={UpdateAlgorithmFunction} />
      </View>
      </ScrollView>
    </>

    :
    <>
    
    <View  style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row',height:'100%'}}>
   <View>
   {/* <RNSpeedometer value={Percentage}  labels= 
  { [
    {
      name: 'Low Risk',
      labelColor: '#00ff6b',
      activeBarColor: '#00ff6b',
    },
    {
      name: 'Medium Risk',
      labelColor: '#f2cf1f',
      activeBarColor: '#f2cf1f',
    },
    {
      name: 'High Risk',
      labelColor: '#f4ab44',
      activeBarColor: '#f4ab44',
    },
    {
      name: 'Very High Risk',
      labelColor: '#ff5400',
      activeBarColor: '#ff5400',
    },
   
   
    
    
  ]}  size={200}/> */}
{/* <TouchableOpacity style={{paddingTop:40,flexDirection:'row',justifyContent:'center'}}  onPress={()=>{navigation.navigate(ROUTES.CHATBOT)}}>
      <Text style={{textAlign:'center',backgroundColor:COLORS.primary,color:COLORS.dark,
      padding:10,width:'50%',borderRadius:30,fontSize:18}}>
      Suggest
        </Text>  
      </TouchableOpacity> */}
<View style={{...styles.card,height:'50%',display:'flex',justifyContent:'center',
alignItems:'center',flexDirection:'row',fontWeight:'bold',borderRadius:20,shadowColor:`${Color}`}}>
  <View>
    <View style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'row'}}>
      <Image  source={(Color === 'red' && IMGS.VERYHIGHINDICATOR) || (Color === 'orange' && IMGS.HIGHINDICATOR) ||
      (Color === 'yellow' && IMGS.MODERATEINDICATOR) || (Color === 'green' && IMGS.LOWINDICATOR)}  resizeMode="contain"/>
    </View>

      <Text style={{...styles.text,color:`${Color}`,fontWeight:'bold',fontSize:24,marginTop:10}}>
        {Percentage}%
      </Text>
      <Text></Text>
      <Text style={{...styles.text,color:`${Color}`,fontWeight:'bold'}}>
        {Score}
      </Text>
      <TouchableOpacity style={{paddingTop:40,flexDirection:'row',justifyContent:'center'}}  onPress={()=>{navigation.navigate(ROUTES.CHATBOT)}}>
      <Text style={{textAlign:'center',backgroundColor:COLORS.primary,color:COLORS.dark,
      padding:10,width:'50%',borderRadius:30,fontSize:18}}>
      Suggest
        </Text>  
      </TouchableOpacity>
  </View>
</View>
   </View>
    </View>
    
    </>
   }   
   
   
   
   
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
  },
  text: {
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign:'center'
  },
});
export default Algorithm;


