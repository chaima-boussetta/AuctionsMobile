import React from 'react';
import { StyleSheet, View , Text,TextInput,Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../assets/logo.png'
import ProfileLogo from '../assets/profile.png'

export default function Profile({navigation}){
    return(
        <ScrollView style={{backgroundColor:'#d4d4d4'}}>
            <View style={styles.header}>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'#FFD32D'}}>Welcome To SHINY AUCTIONS APP</Text>
                        <img src={Logo} style={{flex:2,width:50,marginTop:15}} />
            </View>
            <View style={styles.info}>
                <img src={ProfileLogo} style={{width:150}} />
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
        backgroundColor:'#008E89'
    }
})