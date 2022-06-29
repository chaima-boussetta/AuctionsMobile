import React from 'react';
import { StyleSheet, View , Text,TextInput,Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../assets/logo.png'
import ProfileLogo from '../assets/profile.png'
import {useRoute} from '@react-navigation/native'

export default function Profile({navigation}){
    const route = useRoute();
    return(
        <ScrollView style={{backgroundColor:'#085E7D'}}>
            <View style={styles.header}>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'#FFD32D'}}>Welcome To SHINY AUCTIONS APP</Text>
                        <img src={Logo} style={{flex:2,width:50,marginTop:15}} />
            </View>
            <View style={styles.info}>
                <img src={ProfileLogo} style={{width:150}} />
                <Text style={styles.input}   >First Name : {route.params.firstName}</Text>
                <Text style={styles.input}   >Last Name : {route.params.lastName}</Text>
                <Text style={styles.input}  >Email :{route.params.email} </Text>
                <Text style={styles.input}  >UserName : {route.params.userName} </Text>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:'#008E89',
        height:100,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:'center'
    },
    info:{
        alignItems:'center',
        //backgroundColor:'#008E89',
        margin:10,
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.5)',
        borderWidth:2,
        borderColor:'#FFD32D'
    },
    input:{
        
        width:'90%',
        height:45,
        marginVertical:10,
        borderBottomWidth:1,
        color:'white',
        marginLeft:5,
        padding:10,
        borderBottomColor:'#008E89',
        fontSize:16,
        fontStyle:'italic',
        fontWeight:'bold'
    }
})