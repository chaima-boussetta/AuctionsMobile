import React, { useState } from 'react';
import { StyleSheet, View , Text, Button, Image, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import axios from 'axios';




export default function DetailsOut({navigation}){
    const route = useRoute();
    const [newPrice,setPrice]=useState("");
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
        newPrice:newPrice,
        id:id
    }).then(res=>{console.log(res)})
    }

    const success=()=>{
        
        navigation.navigate("Test");
    }

    return(
        <ScrollView >
            <View style={styles.container}>
            
            <img src={route.params.img} />
            <View style={[styles.info,{borderRadius:10,marginLeft:10,marginRight:10}]} >
            <Text style={{fontWeight:'bold'}}>{route.params.id}</Text>
            <Text style={{fontWeight:'bold'}}>{route.params.price}$</Text>
            <Text style={{fontWeight:'bold'}}>{route.params.description}</Text>
            <Text style={{fontWeight:'bold'}}>EndDate :{route.params.endDate}</Text>

            </View>
            <View style={styles.add}>
                <TextInput  placeholder="Insert id"   value={id} onChange={handleChangeId}  />
                <TextInput  placeholder="Insert price"   value={newPrice} onChange={handleChangePrice}  />
                <Button title='Submit' onPress={success} />
            </View>
            <TouchableOpacity  onPress={success}>
                <Text>press me </Text>
            </TouchableOpacity>
            
            
        </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    
    info:{
        padding:20,
        shadowColor: 'black',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.7,
        shadowRadius: 3,
        margin:12
        

    },
    
    
})