import React from 'react';
import { View,StatusBar, Text,StyleSheet,ScrollView,Pressable } from 'react-native';
import AppLoading from 'expo-app-loading'
import { useFonts, Inter_900Black,Inter_300Light } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_300Light
  });


  if(!fontsLoaded){
    return(
      <AppLoading />
    )
  } else
   
    return (
      
      <ScrollView
      contentContainerStyle={styles.container}
       bounces={false}
      
       indicatorStyle='white'
      >
        <StatusBar hidden/>
        <Text style={styles.heading}>Inter Black</Text>
        <Text style={styles.text}> 
        Do ut sit veniam do aute tempor. Ipsum est consequat cupidatat cupidatat ipsum incididunt deserunt deserunt culpa anim. Deserunt et laborum ea esse 
        sunt mollit irure occaecat. Mollit elit est elit ex pariatur cupidatat occaecat do exercitation voluptate. 
        Lorem nisi voluptate irure nostrud dolor laboris ad aliquip nostrud dolor fugiat in.
        </Text>
        <Text style={styles.text}> 
        Do ut sit veniam do aute tempor. Ipsum est consequat cupidatat cupidatat ipsum incididunt deserunt deserunt culpa anim. Deserunt et laborum ea esse 
        sunt mollit irure occaecat. Mollit elit est elit ex pariatur cupidatat occaecat do exercitation voluptate. 
        Lorem nisi voluptate irure nostrud dolor laboris ad aliquip nostrud dolor fugiat in.
        </Text>
        <Text style={styles.text}> 
        Do ut sit veniam do aute tempor. Ipsum est consequat cupidatat cupidatat ipsum incididunt deserunt deserunt culpa anim. Deserunt et laborum ea esse 
        sunt mollit irure occaecat. Mollit elit est elit ex pariatur cupidatat occaecat do exercitation voluptate. 
        Lorem nisi voluptate irure nostrud dolor laboris ad aliquip nostrud dolor fugiat in.
        </Text>
        <Text style={styles.text}> 
        Do ut sit veniam do aute tempor. Ipsum est consequat cupidatat cupidatat ipsum incididunt deserunt deserunt culpa anim. Deserunt et laborum ea esse 
        sunt mollit irure occaecat. Mollit elit est elit ex pariatur cupidatat occaecat do exercitation voluptate. 
        Lorem nisi voluptate irure nostrud dolor laboris ad aliquip nostrud dolor fugiat in.
        </Text>
        <Text style={styles.text}> 
        Do ut sit veniam do aute tempor. Ipsum est consequat cupidatat cupidatat ipsum incididunt deserunt deserunt culpa anim. Deserunt et laborum ea esse 
        sunt mollit irure occaecat.
        </Text>
        <Pressable 
        onPress={()=>console.warn("Hello")}

        >
        <Text style={[styles.text,styles.textCTA]}>Learn More</Text>
        </Pressable>
      </ScrollView>
    
    );
  
}

const styles = StyleSheet.create({
  container:{
      padding:20,
      paddingLeft:20,
      paddingRight:20,

      backgroundColor:"#111"
  },

  heading:{
    fontFamily: 'Inter_900Black',
     fontSize: 40,
     color:'#fff'
  },
  text:{
    fontFamily: 'Inter_300Light',
    fontSize: 16,
    paddingTop:6,
    paddingBottom:6,
    color:"#ffffffdd"
  },
  textCTA:{
    marginTop:20,
    textDecorationLine:'underline',
    textAlign:"right",
    color:"#ffffff"
  }
})

