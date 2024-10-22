import { ActivityIndicator, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useContext, useState } from 'react';
import { Colors } from '../../Constants/Colors';
import { useNavigation } from '@react-navigation/native';
import { FirebaseConext } from '../../ContextAPI/AuthProvider';

const SignIn = () => {

    const navigation = useNavigation();
    const [email,setEmail]= useState(null);
    const [password,setPassword]= useState(null);
    const {login,loading ,setLoading} = useContext(FirebaseConext);


    const handelLogin = () => {

    login(email,password)
    .then((userCredential) => {
      setEmail('');
     setPassword('');
     navigation.navigate('home');
     setLoading(false);
    })
    .catch((error) => {
      const errorMessage = error.message;
      setLoading(false);
    });



    }
 
  return (
    <View style={{padding:30,marginTop:60,
        backgroundColor: Colors.WHITE,
        height:'100%',
        paddingTop:80,
      }} >
        <Text
        style={{
          fontFamily:'outfit-bold',
          fontSize:30,
  
        }}
        >Let's Sign You In </Text>
        <Text
        style={{
          fontFamily:'outfit-regular',
          fontSize:30,
        }}
        >Welcome back  </Text>
        <Text
        style={{
          fontFamily:'outfit-bold',
          fontSize:30,
          marginTop:10,
        }}
        >You've been Missed  </Text>
  
       <View style={{
        marginTop:50,
        
       }} >
        <Text style={{
          fontFamily:'outfit-medium',
          marginVertical:2,
        }} >Email</Text>
        <TextInput
         style={styles.input} 
          placeholder='Enter Your Name'  
          onChangeText={(text)=>setEmail(text)}
          />
       </View>
       {/* password */}
       <View style={{
        marginTop:20,
        
       }} >
        <Text style={{
         fontFamily:'outfit-medium',
          marginVertical:2,
        }} >Password</Text>
        <TextInput 
        secureTextEntry={true}
         style={styles.input} 
         placeholder='Enter Your Password' 
         onChangeText={(text)=>setPassword(text)}
         />
       </View>
  
       <TouchableOpacity onPress={handelLogin} style={{
        padding:18,
        backgroundColor:Colors.BLACK,
        borderRadius:10,
          marginTop:40,
       }}  >
        {
          loading ? <>
              <ActivityIndicator size="small" color={Colors.WHITE} style={styles.loading} />
          </> : <>
          <Text style={{
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          textAlign:'center',
        }} >Sign In </Text>
          </>
        }
       </TouchableOpacity>
  
  
       <TouchableOpacity  onPress={()=>navigation.navigate('signup')}  style={{
        padding:18,
        borderColor:Colors.BLACK,
        borderRadius:10,
          marginTop:40,
          borderRadius:10,
      borderWidth:2,
      paddingLeft:10,
       }}  >
        <Text style={{
          color:Colors.BLACK,
          fontFamily:'outfit-medium',
          textAlign:'center',
        }} >Create new account </Text>
       </TouchableOpacity >
  
      </View>
  )
};

export default SignIn;

const styles = StyleSheet.create({

    input:{
        borderRadius:10,
        borderWidth:2,
        paddingLeft:10,
        padding:15,
        borderColor:Colors.GRAY,
      }
})