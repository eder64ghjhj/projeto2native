import React from "react";
import {View,Text,Image,StyleSheet} from 'react-native';


export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image 
      source={{uri: 'https://th.bing.com/th/id/OIP._cSgnvaEhekzZUI33WY7jgHaIe?rs=1&pid=ImgDetMain'}}
      style={styles.profileImage}>
      </Image>
      <Text style={styles.name}>Eder Daniel </Text>
      <Text style={styles.description}>Sou apenas um cara tranquilo que odeia react e gosta de assistir anime</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '	#778899	',
    borderRadius: 10,
    padding: 20,
    alignItems:'center',
    shadowColor:'#000',
    shadowOffset:{width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    margin: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description:{
    fontSize: 14,
    color:'#666',
    textAlign:"center"
  }
})

