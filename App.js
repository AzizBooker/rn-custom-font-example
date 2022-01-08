import React from 'react';
import { View, Text,StyleSheet,ScrollView } from 'react-native';
import { useFonts, Inter_900Black,Inter_300Light } from '@expo-google-fonts/inter';

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
    Inter_300Light
  });

   
    return (
      <ScrollView style={styles.container}>
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
        
         
      </ScrollView>
    );
  
}

const styles = StyleSheet.create({
  container:{
      padding:20,
      paddingLeft:12,
      paddingRight:12,
  },
  heading:{
    fontFamily: 'Inter_900Black',
     fontSize: 40
  },
  text:{
    fontFamily: 'Inter_300Light',
    fontSize: 16,
    paddingTop:6,
    paddingBottom:6
  }
})

