import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const SignupPage = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [referal, setReferal] = useState('');

  const handleSignup = () => {
    if (password === confirmPassword) {
      // Implement your signup logic here
      console.log('Signup successful!');
    } else {
      console.log('Passwords do not match');
    }
  };

  return (
    <View style={styles.container}>
        <Text style={{fontSize:32,fontWeight:'bold',color:'blue',marginBottom:15}}> Signup :</Text>
        <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}} >FirstName:</Text>
        <TextInput
        style={styles.input}
        placeholder="Enter your first name"
        onChangeText={text => setFirstname(text)}
        value={firstname}
      />
        <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}}>LastName:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your last name"
        onChangeText={text => setLastname(text)}
        value={lastname}
      />
      <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}}>Username:</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={text => setUsername(text)}
        value={username}
      />
      <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}}>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}}>Phone Number:</Text>
      <TextInput
        style={styles.input}
        placeholder="For ex: +91 9898989898"
        secureTextEntry={true}
        onChangeText={text => setPhonenum(text)}
        value={phonenum}
      />
      <Text style={{fontSize:19,fontWeight:'bold',color:'blue'}}>Referal code:</Text>
      <TextInput
        style={styles.input}
        placeholder="For ex: NEWUSER"
        secureTextEntry={true}
        onChangeText={text => setReferal(text)}
        value={referal}
      />
      <TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    paddingHorizontal: 20,

  },
  Text: {
    fontSize:27,
    fontWeight:'bold'
  },
  
  input: {
    width: '90%',
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    marginTop:5,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 7,
    paddingHorizontal: 90,
    borderRadius: 15,
    marginTop:20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default SignupPage;
