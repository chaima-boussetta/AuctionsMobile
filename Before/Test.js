import {TextInput,View,Button,Text,StyleSheet} from 'react-native'
import { useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Test({navigation}){


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
        navigation.navigate('MainContainer')
    }


    return(
        
        <View >
                <TextInput  placeholder="Insert Auction Reference"   value={id} onChange={handleChangeId} style={styles.ajout} />
                <TextInput  placeholder="Insert Initial Price"   value={price} onChange={handleChangePrice} style={styles.ajout} />
                <TextInput  placeholder="Auction Name"   value={name} onChange={handleChangeName} style={styles.ajout} />
                <TextInput  placeholder="Topic of Auction"   value={topic} onChange={handleChangeTopic} style={styles.ajout} />
                <TextInput  placeholder="Describe Auction For Users"   value={description} onChange={handleChangeDescription} style={styles.ajout} />
                <TextInput  placeholder="End Date"   value={endDate} onChange={handleChangeEndDate} style={styles.ajout} />
                <TextInput  placeholder="Show Us Auction"   value={img} onChange={handleChangeImg} style={styles.ajout} />
                <TouchableOpacity onPress={success}>
                    <Text>change</Text>
                </TouchableOpacity>
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