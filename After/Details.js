import React from 'react';
import { StyleSheet, View , Text,TextInput,Button, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from "react";
import axios from 'axios';




export default function Details({navigation}){
    const route = useRoute();


    const [price,setPrice]=useState("");
    const [id,setId]=useState("");

    const handleChangePrice = event =>{
        setPrice(event.target.value);
        
    }
    const handleChangeId = event =>{
        setId(event.target.value);
        
    }
    const postData=()=>{
        //post to localhost
        axios.post('http://localhost:8081/changePrice',
        {
        price:price,
        id:id
    }).then(res=>{console.log(res)})
    }

    const success=()=>{
        postData();
        navigation.navigate("Home");
    }



    return(
        <ScrollView style={{backgroundColor:'#d4d4d4'}}>
            <View style={styles.container}>
            
            <img src={route.params.img} />
            <View style={{backgroundColor:'#085E7D',width:80,height:35,borderRadius:10,alignItems:'center',padding:3,transform:[{translateY:-40},{translateX:270}]}}>
            <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>{route.params.price}$</Text>
            </View>
            <View style={[styles.info,{borderRadius:10,marginLeft:10,marginRight:10}]} >
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>Reference : {route.params.id}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>Description : {route.params.description}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:20}}>EndDate :"{route.params.endDate}"</Text>
            </View>

            <View >
                <TextInput  placeholder="Reference"   value={id} onChange={handleChangeId} style={styles.input} />
                <TextInput  placeholder="New Price"   value={price} onChange={handleChangePrice} style={styles.input} />
            </View>
           
            <TouchableOpacity  onPress={success} style={{height:50,backgroundColor:'#085E7D',borderRadius:5,margin:20,alignItems:'center',padding:10}}>
                <Text style={{color:'#FFD32D',fontWeight:'bold',fontStyle:'italic',fontSize:20,fontStyle:'italic'}}> PLACE A BID </Text>
            </TouchableOpacity>
            
            
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    
    info:{
        padding:20,
        shadowColor: '#085E7D',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.7,
        shadowRadius: 3,
        margin:12
    },
    
    input:{
        fontSize:20,
        borderColor:'#FFD32D',
        borderWidth:2,
        height:50,
        margin:10,
        padding:10,
        color:'black',
        borderRadius:10
    }
})