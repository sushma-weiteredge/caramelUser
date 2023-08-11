import { KeyboardAvoidingView,SafeAreaView,View,Text,TouchableOpacity } from 'react-native';
import React,{useEffect,useState} from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import {COLORS, ROUTES,IMGS} from '../../constants';
const ChatBot = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [messages, setMessages] = useState([
    {
      _id: 123,
      text:
        'Hi',
      user: {
        _id: 2,
        name: 'you',
        avatar: '/me.jpg',
      },
      createdAt: new Date(),
    },
    
  ]);

  const onSend = newMessages => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, newMessages));
  console.log(newMessages[0].text)

  };
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
 
  return (
    <>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',marginVertical:10,paddingHorizontal:10 }}>
<View>

</View>
    <TouchableOpacity onPress={()=>{console.log("Pressed")
  navigation.navigate(ROUTES.CONSULT)}} style={{ backgroundColor: COLORS.primary, padding: 10, borderRadius: 10, paddingHorizontal: 20 }}>
              <Text style={{ color: COLORS.dark }}>
                Consult
              </Text>
            </TouchableOpacity>
    </View>
   
    <SafeAreaView style={{ flex: 1 ,marginBottom:70}}>
        <GiftedChat
          
          messages={messages}
          onSend={onSend}
          user={{
            _id: 1, // Replace with a unique user ID
            name: 'John', // Replace with the user's name
          }}
        />
       
   </SafeAreaView>
    </>
  );
};

export default ChatBot;


