import { View, StyleSheet, Text, Image, Button, TouchableOpacity} from 'react-native'
import React from 'react'

export default function App() {

  const Commencer = () => {
    alert('Le bouton cliquer')
  }
  return (
    <View>
      <View style={styles.topImageContainer}>
         <Image source={require('../../assets/images/Group 1.png')} style={styles.topImage}/>
      </View>

      <View style={styles.LunchPageContainer}>
        <Image source={require('../../assets/images/undraw_empty_cart_co35.png')} style={styles.LunchPageImage}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textIntro}>Laissez-vous guider pour vos achats</Text>
      </View>
      
      <View style={styles.textDetailContainer}>
        <Text style={styles.textDetail}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ad veritatis amet doloremque provident itaque aut nulla commodi aliquid dolore, labore incidunt dolor laboriosam perspiciatis alias voluptas accusamus, eaque impedit!</Text>
      </View>

      <TouchableOpacity style={styles.buttonContainer} onPress={Commencer}>
        <Text style={styles.buttonStart}>Commencer</Text>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
  topImageContainer: {
    position: 'relative',

  },
  topImage: {
    width: 250,
    height: 290
  }, 
  LunchPageContainer: {
  
    marginBottom:30,
    marginHorizontal: 80,

  },
  LunchPageImage: {
   // position: 'absolute',
    width: 300,
    height: 200,
    
  },
  textContainer: {
    marginTop: 20,
  
  },
  textIntro: {
    textAlign : 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textDetailContainer: {
    marginTop: 40,
    
  
  },
  textDetail: {
    textAlign : 'center',
    fontSize: 14,
  },
  buttonContainer: {
    marginTop: 50,
    backgroundColor: '#E682ED',
    marginHorizontal: 100,
    height: 50,
    //paddingVertical: 7,
    borderRadius: 70
    
  },
  buttonStart: {
    color: 'white',
    marginVertical: 16,
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold'
  }
})

