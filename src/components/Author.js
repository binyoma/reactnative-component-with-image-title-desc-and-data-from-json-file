import { View, Text, Image } from 'react-native'
import React from 'react'

const Author = (props) => {
  const {title, img, desc, index} = props
  return (
    <View key={index} style={{flex:1,flexDirection:"row", marginVertical: 5}} >
        <View style={{ flex:1}}>
           <Image  style={{flex:1}} source={{uri:img}}/>
        </View>
        <View style={{flex:1}}>
             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text>{title}</Text></View>
             <View style={{ flex:1,padding:5,}}><Text> {desc}</Text></View>
        </View>
    </View>);
}

export default Author