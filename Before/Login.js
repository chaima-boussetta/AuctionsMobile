import React from "react";
import { View ,StyleSheet,Text, Image, ScrollView, TouchableOpacity, TextInput} from "react-native";
import { useState } from "react";
import axios from "axios";



function Login ({navigation}) {


    const [username,setUsername]=useState("");

    const [password,setPassword]=useState("");
    

    const handleChangePassword = event =>{
        setPassword(event.target.value);
        
    }

    const handleChangeUsername = event =>{
        setUsername(event.target.value);
        
    }
    const postData=()=>{
        //post to localhost
        axios.post('http://localhost:8081/login',
        {
        password:password,
        username:username
    }).then(res=>{console.log(res)})
    }
    const welcome=()=>{
        postData();
        navigation.navigate("Test");
    }
    return(
        <ScrollView style={{backgroundColor:'#008E89'}}>
            <View >
                <Image source={require('../assets/logo.png')} resizeMode="center" style={styles.image} />
                <View style={styles.contdown}>
                    <Text style={{color:'#085E7D',fontSize:40,fontWeight:1000,fontStyle:'italic'}}>Welcome back</Text>
                    <Text style={{fontSize:18,color:'white'}}>Log In to your existant account</Text>
                    <View style={{marginTop:20}} />
                    <TextInput style={styles.input} placeholder="UserName" value={username} onChange={handleChangeUsername}/>
                    <TextInput style={styles.input} placeholder="Password"  secureTextEntry={true} value={password} onChange={handleChangePassword} icon="lock"  pass={true} required /*onChangeText={value=>setPassword(value)}*/ />
                    <TouchableOpacity style={[styles.reg,{backgroundColor:'#085E7D'}]} >
                    <Text style={[styles.regtext, {color:'white'}]}  onPress={welcome} >LOGIN</Text>
                   </TouchableOpacity>
                   <View style={{flexDirection:'row', marginVertical:5}}>
                      <Text style={{color:'white',fontSize:20,fontStyle:'italic'}}>Don't Have an account?</Text>
                      <Text style={ {color:'#085E7D',fontSize:18,fontWeight:'bold',margin:5}} onPress={() => navigation.navigate('SignUp')}>Sign Up</Text>
                   </View>
                </View>
                
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        width:400,
        height:250,
        marginVertical:10,
    },
    regtext:{
        color:'white',
        fontSize:22,
    },
    reg:{
        borderRadius:20,
        width:'90%',
        height:50,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1
    },
    input:{
        borderRadius:100,
        width:'100%',
        height:50,
        padding:10,
        marginVertical:10,
        borderWidth:1,
        color:'black',
        marginLeft:15,
        borderColor:'#FFD32D',
        fontSize:16
    },
    contdown:{
        alignItems:'center',
        margin:20
    }
});

export default Login;



