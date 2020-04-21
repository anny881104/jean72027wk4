import React from 'react';
import { View, FlatList,StyleSheet,Image,TouchableOpacity, Linking,Text } from "react-native"



const AlbumDetail = ({ album, navigation }) => {
    return (
 
    <View style={styles.card}>
        <View style={styles.postname}>
            <Image style={{width:28,height:28,marginLeft:11,marginRight:9,marginTop:9}} source={{uri: album.thumbnail_image}}/>
            <Text style={styles.textstyle}> {album.title}</Text>
        </View>
        <View >
            <Image style={styles.postpic} source={{uri: album.image}}/>
        </View>
        <View style={styles.likebar}>
            <Image source={{url:"https://raw.githubusercontent.com/jean72027/wk4-HW/master/img/icon/Icon%20feather-heart.png"}} 
            style={styles.pic1}/>
            <Image source={{url:"https://raw.githubusercontent.com/jean72027/wk4-HW/master/img/icon/Icon%20feather-message-circle.png"}} 
            style={styles.pic2}/>
            <Image source={{url:"https://cdn0.iconfinder.com/data/icons/instagram-32/512/Chat_Message_DM-512.png"}} 
            style={{width:25,height:25,marginLeft:16,marginTop:-3,}}/>
            <Image source={{url:"https://raw.githubusercontent.com/jean72027/wk4-HW/master/img/icon/Icon%20material-bookmark-border.png"}} 
            style={{width:18,height:20.4,marginLeft:275}}/>
        </View>
        <View style={styles.post}>
            <Text style={styles.posttext}>{album.likes}</Text>
            <Text style={styles.posttext}>{album.article}</Text>
        </View>
    </View>
    );

};
const styles = StyleSheet.create({
    card:{
        flexDirection:"column",
        justifyContent:"flex-start",
    },

    postname:{
        width:360,
        height:46,
        flexDirection:"row",
        justifyContent:"flex-start",
    },
    textstyle:{
        fontSize:13,
        alignItems:"center",
        marginTop:13,
    },
    postpic:{
        width: null,
        height: 360,
        
    },
    likebar:{
        width:415,
        height:50,
        flexDirection:"row",
        justifyContent:"flex-start",
        paddingTop:15,
    },
    pic1:{
        width:20,
        height:17.5,
        marginLeft:12,
    },
    pic2:{
        width:18,
        height:18,
        marginLeft:16
    },
    post:{
        flexDirection:"column",
        justifyContent:"flex-start",
    },
    posttext:{
        marginLeft:13,
        fontSize:13,
    },

});


export default AlbumDetail;