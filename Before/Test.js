import {TextInput,View,Button,Text,StyleSheet} from 'react-native'
import { useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useRoute } from '@react-navigation/native';
export default function Test({navigation}){


    const route = useRoute();
    

    


    return(
        <View style={[styles.info,{borderRadius:10,marginLeft:10,marginRight:10}]} >
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>Reference : {route.params.email}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>Description : {route.params.firstName}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>EndDate :"{route.params.lastName}"</Text>
        </View>
    )

}
const styles = StyleSheet.create({
    ajout:{
        borderWidth:3,
        borderColor:'red',
        height:40
    }
})