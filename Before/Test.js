import {TextInput,View,Button,Text} from 'react-native'
import { useState } from 'react';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Test(){


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
    }).then(res=>{console.log(res)}).catch(err => {
        console.log(err)
    })
    }

    const success=()=>{
        postData();
    }



    return(
        
        <View >
                <TextInput  placeholder="Insert id"   value={id} onChange={handleChangeId}  />
                <TextInput  placeholder="Insert price"   value={price} onChange={handleChangePrice}  />
                
                <TouchableOpacity onPress={success}>
                    <Text>change</Text>
                </TouchableOpacity>
            </View>
    )

}