import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, StatusBar} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Carousel from 'react-native-anchor-carousel';
import { FontAwesome5  } from '@expo/vector-icons'

const Recents = (props) => {

  const [background,setBackground] = useState({
    uri: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9',
    name: 'Avengers: End Game'
  })

  const [gallery, setgallery] = useState([
 
    { image:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9', title: 'Avengers: End Game',key: '1' },
    {
    image:'https://www.spotlightstheatre.co.uk/wordpress/wp-content/uploads/2019/11/f_frozen2_header_mobile_18432_d258f93f.jpeg', title: 'Frozen II',  key: '2' },
    { image:'https://miro.medium.com/max/700/0*SlniYnTop92-Ql5X.jpeg', title: 'Star Wars',key: '3' },
    { image:'https://www.gstatic.com/tv/thumb/v22vodart/15879807/p15879807_v_v8_aa.jpg', title: 'The Irish Man', key: '4' },
  ]);

 
  const {width, height} = Dimensions.get('window')

  


  return (
    <View style={styles.container}>
    <StatusBar backgroundColor='#000' barStyle='light-content' />
    <View style={{...StyleSheet.absoluteFill, backgroundColor: '#000'}}>
        <Image source={{ uri: background.uri  }} style={styles.ImageBg} blurRadius={0.4}/>
        <Text style={{color: 'white', position: 'absolute', top: 40, left: 14, fontWeight: 'bold', fontSize: 24}}>{background.name}</Text>
    </View>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-end'
  },
  ImageBg: {
    flex: 1,
    height: null,
    width: null,
    opacity: 0.3
  
  },
  carouselContainer: {
    width: '100%',
    height:250 ,
    justifyContent: 'center',
    alignItems: 'center',
},
  carousel: {
    flex:1,
    overflow: 'visible'
} ,
playIconContainer: {
    position: 'absolute',
    top: -10,
    right: 2,
    backgroundColor: '#02ad94',
    padding: 10,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    borderWidth: 4,
    borderColor: 'rgba(0, 255, 217, 0.4)'

}
});

export default Recents;