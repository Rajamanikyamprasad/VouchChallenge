import React from 'react';
import { useState } from 'react';
import { View, Text, Image, ImageBackground, StyleSheet, TextInput, searchText} from 'react-native';

const HomePage = () => {

        const [searchText, setSearchText] = useState('');
      
        const handleSearch = text => {
          setSearchText(text);
          // Implement your search logic here
        };
  return (

    <View style={styles.container}>
      <ImageBackground
        source={require('../background.png.jpeg')}
       // style={styles.imageBackground}
      >
        <Text style={styles.logoText}>Your Protected payments</Text>
        <Text style={styles.text}>We are excited for you to protect</Text>
        <Text style={styles.text}> your first payment!!</Text>
      </ImageBackground>
      <View>
      <TextInput
        style={styles.input}
        placeholder="Find people who are vouched...."
        onChangeText={handleSearch}
        value={searchText}
      />
      </View>

    <View style={styles.container1}>
      
      <Image
        source={require('../notification.png')} 
        style={styles.logo}
      />
      <Image
        source={require('../whousing.png')} 
        style={styles.logo}
      />
      <Image
        source={require('../helpbot.png.jpeg')} 
        style={styles.logo}
      />
     
     
    </View>
    <View style={styles.container2}>
    <Text style={styles.subHeading}>All notifications</Text> 
      <Text style={styles.subHeading}>who is using</Text>
      <Text style={styles.subHeading}>help bot</Text>
    </View>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    display:'flex'
  },
  container1: {
    justifyContent: 'flex-start',
    display:'flex',
    flexDirection:'row',
    marginTop:20,
    borderTopEndRadius:10


  },
  container2: {
    justifyContent: 'flex-start',
    display:'flex',
    flexDirection:'row',
  },
  logo: {
    width: 50,
    height: 50,
    marginBottom: 20,
    marginTop:20,
    margin:35
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: 16,
    color: 'black',
    margin:15,
    marginTop:0
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderRadius: 5,
    margin:'auto',
    marginTop:40,
  },
  text:{
    color:'white',
    margin:'auto'
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginTop:90
  },


});

export default HomePage;
