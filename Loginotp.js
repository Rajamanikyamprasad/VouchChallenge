import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';





  const Loginotp = () => {

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
<Text style={{fontSize:32,fontWeight:'bold',color:'blue',marginBottom:15}}>OTP Verification:</Text>
<Text style={{marginLeft:100,marginTop:30}}>Enter the OTP sent to +91 9898989898</Text>

<View style={styles.container1}>
  <Text style={styles.text}>______</Text>
  <Text style={styles.text}>______</Text>
  <Text style={styles.text}>______</Text>
  <Text style={styles.text}>______</Text>

  
</View>
<Text style={{marginLeft:100,marginTop:30}}>Don't receive the OTP?<Text style={{color:'red'}}>RESEND OTP</Text></Text>

<View>
<TouchableOpacity style={styles.button} onPress={handleSignup}>
        <Text style={styles.buttonText}>Verify & Proceed</Text>
      </TouchableOpacity>
</View>
</View>


)
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    paddingHorizontal: 20,
  },
    container1: {
      //alignItems: 'center',
      display:'flex',
      flexDirection:'row',
    },
    text:{
      width:150,
      marginTop:50

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

  })

  export default Loginotp;