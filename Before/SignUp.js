import React from "react";
import { View,StyleSheet,Text,ScrollView,Image,TouchableOpacity,TextInput} from "react-native";
import { useState } from "react";
import axios from "axios";


function SignUp({navigation}){

    const [firstName,setFname]=useState("");
    const [lastName,setLname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");

    //handling changes

    const handleChangeEmail = event =>{
        setEmail(event.target.value);
        
    }
    const handleChangeUsername = event =>{
        setUsername(event.target.value);
        
    }
    const handleChangePassword = event =>{
        setPassword(event.target.value);
        
    }
    const handleChangeFname = event =>{
        setFname(event.target.value);
        
    }
    const handleChangeLname = event =>{
        setLname(event.target.value);
        
    }

    const postData=()=>{
        //post to localhost
        axios.post('http://localhost:8081/registration',
        {
        firstName:firstName,
        lastName:lastName,
        email:email,
        username:username,
        password:password,
        
    }).then(res=>{console.log(res)})
    }
    // get data from the server
    const getData=()=>{
        axios.get('http://localhost:8080/user/id').then(resp=>{
            console.log(resp.data)
        })
    }
    const welcome=()=>{
        postData();
        navigation.navigate("MainContainer");
    }
        return(
            <ScrollView style={{backgroundColor:'#008E89'}}>
                <View style={styles.container}>
                    <Image source={require('../assets/logo.png')} resizeMode="center" style={styles.image} />
                    <Text style={[styles.texteTitle,{fontSize:40,fontWeight:1000}]}>Let's Get Started</Text>
                    <Text style={styles.textBody}>Create an account to get all features</Text>
                    <TextInput style={styles.input} placeholder='First Name' value={firstName}  onChange={handleChangeFname} />
                    <TextInput style={styles.input}  placeholder='Last Name' value={lastName} onChange={handleChangeLname} />
                    <TextInput style={styles.input} placeholder='Email' value={email} onChange={handleChangeEmail} />
                    <TextInput style={styles.input} placeholder='UserName' value={username} onChange={handleChangeUsername} />
                    <TextInput style={styles.input} placeholder='Password' value={password} onChange={handleChangePassword} />
                    <TouchableOpacity style={styles.reg} >
                        <Text style={[styles.regtext, {color:'white'}]}  onPress={welcome} >SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:'row'}}>
                        <Text style={styles.textBody}>Already Have An Account? </Text>
                        <Text style={[styles.textBody, {color: '#085E7D'}]} onPress={()=> navigation.navigate('Login')}>Login Here</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
   
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        position:'relative',
        top:0,
    },
    image:{
        width:400,
        height:200,
        marginVertical:10,
    },
    texteTitle:{
        fontSize:35,
        color:'#085E7D',
        marginVertical:5,
    },
    textBody:{
        fontSize:16,
        color:'white',
    },
    regtext:{
        color:'white',
        fontSize:22,
    },
    reg:{
        borderRadius:20,
        backgroundColor:'#085E7D',
        width:'90%',
        height:45,
        justifyContent: 'center', 
        alignItems: 'center', 
        flex:1
    },
    input:{
        borderRadius:100,
        width:'90%',
        height:45,
        marginVertical:10,
        borderWidth:1,
        color:'white',
        marginLeft:5,
        padding:10,
        borderColor:'#FFD32D',
        fontSize:16
    }
});
export default SignUp;

