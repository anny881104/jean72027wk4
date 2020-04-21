import React from 'react';
import { View, FlatList,StyleSheet,Image,TouchableOpacity, Linking } from "react-native"

import AlbumDetail from "../components/albumdetails";
import albumData from "../json/post.json";
import headerData from "../json/chat.json";

const HomeScreen = ({ navigation }) => {
    return (
  <View style={{flex:1,backgroundColor:"#FFFFFF"}}>
              <View style={styles.headerbar}>
              <Image source={{url:"https://raw.githubusercontent.com/jean72027/wk4-HW/master/img/icon/Icon%20feather-camera.png"}} style={styles.headerLeft}/>
              <Image source={{url:"https://raw.githubusercontent.com/anny881104/igimg/master/imgs/ig.png"}} style={styles.headermid}/>
                  <TouchableOpacity
                      onPress={() => navigation.push('MessageScreen')}>
                      <Image source={{url: headerData.HomePage.HeaderRightUrl}} style={styles.headerRight}/>
                  </TouchableOpacity>
              </View>
              <FlatList 
              data={albumData.albumList} 
              renderItem={({item}) => <AlbumDetail album={item} navigation={navigation} 
              keyExtractor={item=>item.title} />}
              />
              <View style={styles.bottombar}> 
                  <Image  source={{uri: headerData.HomePage.home}} style={styles.home}/>
                  <Image  source={{uri: headerData.HomePage.search}} style={styles.search}/>
                  <Image  source={{uri: headerData.HomePage.addarticle}} style={styles.addarticle}/>
                  <Image  source={{uri: headerData.HomePage.heart}} style={styles.heart}/>
                  <Image  source={{uri: headerData.HomePage.userpic}} style={styles.userpic}/>
              </View>
          </View>
        );
    };
      const styles = StyleSheet.create({
        headerbar:{
            flexDirection:"row",
            justifyContent:"flex-start",
            width:410,
            height:50,
            backgroundColor:'#EEEEEE',
            //marginTop:30,
            //elevation:4
        },
        
        headerLeft:{
          marginTop:20,
          marginLeft:11,
          width: 19.5,
          height: 16,
        },

        headermid:{
          marginTop:20,
          marginLeft:12,
          width: 75,
          height: 22,
        },

        headerRight:{
          marginTop:25,
          marginLeft:265,
          marginBottom:10,
          width: 20,
          height: 20,
        },

        home:{
            width:28,
            height: 28,
            marginTop:10,
            marginLeft:26,
        },

        search:{
            width: 28,
            height: 28,
            marginTop:10,
            marginLeft:58,
        },

        addarticle:{
            width: 28,
            height: 28,
            marginTop:10,
            marginLeft:58,
        },

        heart:{
            width: 28,
            height: 25,
            marginTop:10,
            marginLeft:58,
        },

        userpic:{
            width: 26,
            height: 26,
            marginTop:11,
            marginLeft:58,
        },

        bottombar:{
          //justifyContent:"center",
          alignItems:"center",
          flexDirection:"row",
          justifyContent:"flex-start",
          //justifyContent:"space-between",
          height:56,
          backgroundColor:'#EEEEEE',
        }

    });
  export default HomeScreen;