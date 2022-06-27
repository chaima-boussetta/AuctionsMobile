import React, {useState,useEffect} from "react";
import axios, { Axios } from "axios";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Data from '../Data';
import {TouchableOpacity,StyleSheet} from 'react-native'
import Profil from '../assets/pdp.jpg'

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

                <ScrollView>
                    {
                        auctions.map( auction => (
                            
                            <View key={auction.id} style={{padding:10,backgroundColor:'lightblue',margin:10}}>
                                <img src={auction.img} />
                                <Text>{auction.description}</Text>
                                <Text>{auction.price}</Text>
                                <TouchableOpacity 
                                onPress={() => navigation.navigate('DetailsOut',auction)}
                                style={{height:20,width:100,backgroundColor:'black'}}>
                                    <Text style={{color:'white'}}>View Details</Text>
                                </TouchableOpacity>
                            </View>
                        ))
                    }
                     
                </ScrollView>
    );
}

export default Consult ;
