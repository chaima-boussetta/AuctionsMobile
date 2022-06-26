import React, {useState,useEffect} from "react";
import axios from "axios";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import Data from '../Data';
import {TouchableOpacity,StyleSheet} from 'react-native'
import Profil from '../assets/pdp.jpg'

export default function Consult({ navigation }) {
    return (

                <FlatList style={{paddingTop:20,margin:25}}
                  data={Data}
                  renderItem={({item}) =>
                  
                    <View key={item.id}  style={{
                        alignItems:'center',
                        borderColor:'green',
                        borderWidth:3,
                        backgroundColor:'#d7dde9',
                        marginBottom:10,
                        marginTop:10,
                        borderTopLeftRadius:20,
                        borderTopRightRadius:20,
                        borderBottomRightRadius:20,
                        borderBottomLeftRadius:20
                        }}>
                       
                        <Image source={item.image} style={{
                            width:'100%',
                            borderWidth:3,
                            borderColor:'red',
                            borderTopLeftRadius:20,
                            borderTopRightRadius:20
                            }} />
                            <View style={{
                                borderWidth:4,
                                borderColor:'yellow',
                                flexDirection:'column',
                                justifyContent:'space-between',
                                width:'50%',
                                height:100,
                                alignItems:'center',
                                margin:20
                            }}>
                            <Text style={{fontWeight:'bold',color:'blue',fontSize:20,marginBottom:10,flex:1}}>{item.name}</Text>
                            <Text style={{fontStyle:'Brush Script MT',flex:2}}>{item.price}$</Text>
                            </View>
                            
                        
                    </View>
                 
                  
                            
                }
                >

                </FlatList>
    );
}
