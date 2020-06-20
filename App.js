import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
   <View style ={styles.container}>
   <Text style ={styles.AppText}>
   Hello
   </Text>
   </View>
)};



const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 50,

  },


  AppText:{
    padding:50,
    fontSize: 30,
    justifyContent: 'center',
    textAlign: 'center',
    color: 'red',
    
  },
});

export default App;
