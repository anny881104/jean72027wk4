import React from 'react';
import { StyleSheet,View, TouchableOpacity,Image,ScrollView,Text} from 'react-native';
import headerData from "../json/chat.json";

const MessageScreen = ({navigation}) => {
  return(
        
    <View style={{flex:1,backgroundColor:"#FFFFFF"}}>

               <View style={styles.headerbar}>
                   <TouchableOpacity
                       onPress={() => navigation.goBack()}>
                       <Image source={{uri: headerData.MessagePage.HeaderLeftUrl}}
                               style={styles.headerLeft}/>
                   </TouchableOpacity>
                   <Text style={styles.usernametext}>jean0422</Text>
                   <Image source={{uri: headerData.MessagePage.bottomImage}} style={styles.headerMid}/>         
                   <Image source={{uri: headerData.MessagePage.HeaderRightUrl}} style={styles.headerRight}/>      
               </View>

               <ScrollView>
               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends.camera}} style={styles.camera}/>
               </View>

               <View  style={styles.headermidStyle}>
               <Image source={{url: headerData.Friends2.thumbnail_image}} style={styles.chatpicture}/>      
                  <View style={styles.talkbox}>
                  <Text style={styles.midfontstyle}>{headerData.Friends2.name}</Text>
                  <Text style={styles.talk}>{headerData.Friends2.chat}</Text>
                  </View>
                  <Image source={{url: headerData.Friends2.camera}} style={styles.camera}/>
               </View>

               
               </ScrollView>
               
           </View>
           
          
       );
   };
   const styles = StyleSheet.create({
       headerRight:{
           marginTop:10,
           width: 22,
           height: 16,
           marginRight:11,
         },
         headerMid:{
          marginTop:10,
          width: 25,
          height: 20,
          marginLeft:25,
         },
         usernametext:{
           marginTop:10,
           marginLeft:85,
           fontSize:20,
           fontWeight:"700"
         },
         headerLeft:{
           marginTop:15,
           marginRight: 0,
           marginLeft:15,
           width: 12,
           height: 23
         },
         headerbar:{
          justifyContent:"center",
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-start",
          justifyContent:"space-between",
           width:null,
           height:70,
           backgroundColor:'#fafafa',
           elevation:4
       },
       headermidStyle:{
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"row",
        //justifyContent:"flex-start",
        justifyContent:"space-between",
        height:90,
        width:null,
       },
       chatpicture:{
         height:40,
         width:40,
         marginLeft:15
       },
       midfontstyle:{
        fontSize:18,
        marginLeft:-180
       },
       talkbox:{
        //justifyContent:"center",
        alignItems:"center",
        justifyContent:"flex-start",
       },
       camera:{
         width:38,
         height:32,
         marginRight:15
       },
       talk:{
        fontSize:17,
        color:"#888888",
        marginLeft:-160
       },
       bottom:{
           width: 360,
           height: 45,
         },
       mesList:{
           marginTop:20,
           width:340,
           height:550,
           marginLeft:10,
           marginRight:10,
           
       },
   });

export default MessageScreen;