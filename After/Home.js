import React, {useState,useEffect} from "react";
import axios from "axios";
import {ScrollView, Text, View } from "react-native";
import {TouchableOpacity,StyleSheet} from 'react-native'

import Logo from '../assets/logo.png';


 function Consult({ navigation }) {
    const [auctions,setAuctions] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8081/lots')
        .then(res => {
            console.log(res)
            setAuctions(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])
    return (

                <ScrollView style={{backgroundColor:'#d4d4d4'}}>
                    <View style={styles.header}>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'#FFD32D'}}>Welcome To SHINY AUCTIONS APP</Text>
                        <img src={Logo} style={{flex:2,width:50}} />
                    </View>
                    {
                        auctions.map( auction => (
                            
                            <View key={auction.id} style={{backgroundColor:'#085E7D',margin:10,borderRadius:10}}>
                                <img src={auction.img} style={{width:'100%',borderTopLeftRadius:10,borderTopRightRadius:10}} />
                                <View style={styles.detail}>
                                <Text style={{fontSize:20,color:'white'}}>{auction.name}</Text>
                                <Text style={{fontSize:20,color:'white'}}>{auction.price}$</Text>
                                <TouchableOpacity 
                                onPress={() => navigation.navigate('Details',auction)}
                                style={{height:40,width:150,backgroundColor:'#FFD32D',alignItems:'center',margin:5,borderRadius:5}}>
                                    <Text style={{fontSize:24,fontStyle:'italic',fontWeight:'bold'}}>View Details</Text>
                                </TouchableOpacity>
                                </View>
                                
                            </View>
                        ))
                    }
                     
                </ScrollView>
    );
}

const styles= StyleSheet.create({
    header:{
        flexDirection:"row",
        backgroundColor:'#008E89',
        height:100,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:'center'
    },
    detail:{
        alignItems:'center'
    }
    
})

export default Consult ;
