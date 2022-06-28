import {TextInput,View,Button,Text,StyleSheet} from 'react-native'
import { useState } from 'react';
import axios from 'axios';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import Logo from '../assets/logo.png'

export default function Add({navigation}){


    const [id,setId]=useState("");
    const [name,setName]=useState("");
    const [price,setPrice]=useState("");
    const [topic,setTopic]=useState("");
    const [description,setDescription]=useState("");
    const [endDate,setEndDate] = useState("");
    const [img,setImage]= useState("");
    

    //handling changes

    const handleChangeId = event =>{
        setId(event.target.value);
        
    }
    const handleChangeName = event =>{
        setName(event.target.value);
        
    }
    const handleChangePrice = event =>{
        setPrice(event.target.value);
        
    }
    const handleChangeTopic = event =>{
        setTopic(event.target.value);
        
    }
    const handleChangeDescription = event =>{
        setDescription(event.target.value);
        
    }
    const handleChangeEndDate = event =>{
        setEndDate(event.target.value);
    }
    const handleChangeImg = event =>{
        setImage(event.target.value);
    }
    

    const postData=()=>{
        //post to localhost
        axios.post('http://localhost:8081/addP',
        {
        id:id,
        name:name,
        price:price,
        topic:topic,
        description:description,
        endDate:endDate,
        img:img,
        }
    ).then(res=>{console.log(res)})
    }
    const success=()=>{
        postData();
        navigation.navigate('Home')
    }


    return(
        <ScrollView style={{backgroundColor:'#d4d4d4'}}>
            <View style={styles.header}>
                        <Text style={{fontStyle:'italic',fontSize:16,color:'#FFD32D'}}>Welcome To SHINY AUCTIONS APP</Text>
                        <img src={Logo} style={{flex:2,width:50}} />
            </View>
            <View style={{alignItems:'center',marginTop:15}}>
                <TextInput  placeholder="Insert Auction Reference"   value={id} onChange={handleChangeId} style={styles.ajout} />
                <TextInput  placeholder="Insert Initial Price"   value={price} onChange={handleChangePrice} style={styles.ajout} />
                <TextInput  placeholder="Auction Name"   value={name} onChange={handleChangeName} style={styles.ajout} />
                <TextInput  placeholder="Topic of Auction"   value={topic} onChange={handleChangeTopic} style={styles.ajout} />
                <TextInput  placeholder="Describe Auction For Users"   value={description} onChange={handleChangeDescription} style={styles.ajout} />
                <TextInput  placeholder="End Date"   value={endDate} onChange={handleChangeEndDate} style={styles.ajout} />
                <TextInput  placeholder="Show Us Your Auction"   value={img} onChange={handleChangeImg} style={styles.ajout} />
                <TouchableOpacity onPress={success}
                style={{backgroundColor:'#085E7D', height:40,marginTop:20,padding:10,borderRadius:10}}
                >
                    <Text style={{fontSize:18,fontStyle:'italic',color:'white',fontWeight:'bold'}}>Add New My Auction</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
       
    )

}
const styles = StyleSheet.create({
    ajout:{
        borderWidth:2,
        borderColor:'#FFD32D',
        height:40,
        fontSize:20,
        padding:15,
        marginBottom:10,
        borderRadius:10,
        width:'95%'
    },
    header:{
        flexDirection:"row",
        backgroundColor:'#008E89',
        height:100,
        margin:10,
        borderRadius:10,
        padding:10,
        alignItems:'center'
    }
})