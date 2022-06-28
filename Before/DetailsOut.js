import React from 'react';
import { StyleSheet, View , Text, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';




export default function DetailsOut({navigation}){
    const route = useRoute();

    return(
        <ScrollView >
            <View style={styles.container}>
            
            <img src={route.params.img} />
            <View style={{backgroundColor:'#085E7D',width:80,height:35,borderRadius:10,alignItems:'center',padding:3,transform:[{translateY:-40},{translateX:270}]}}>
            <Text style={{fontWeight:'bold',color:'white',fontSize:25}}>{route.params.price}$</Text>
            </View>
            <View style={[styles.info,{borderRadius:10,marginLeft:10,marginRight:10}]} >
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:24}}>Reference : {route.params.id}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:24}}>Description : {route.params.description}</Text>
            <Text style={{fontWeight:'bold',fontStyle:'italic',fontSize:24}}>EndDate :"{route.params.endDate}"</Text>

            </View>
           
            <TouchableOpacity  onPress={() => navigation.navigate('Login')} style={{height:60,backgroundColor:'#085E7D',borderRadius:5,margin:20,alignItems:'center',padding:10}}>
                <Text style={{color:'#FFD32D',fontWeight:'bold',fontStyle:'italic',fontSize:20,fontStyle:'italic'}}>WANT TO PLACE A BID ?</Text>
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
    
    
})