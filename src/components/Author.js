import { View, Text, Image } from 'react-native'
import React from 'react'

const Author = (props) => {
  const {item} = props
  return (
    <View  style={{flex:1,flexDirection:"row", marginVertical: 5}} >
        <View style={{ flex:1}}>
           <Image  style={{flex:1}} source={{uri:item.img}}/>
        </View>
        <View style={{flex:1}}>
             <View style={{flex:1,alignItems:"center",justifyContent:"center"}}><Text>{item.title}</Text></View>
             <View style={{ flex:1,padding:5,}}><Text> {item.desc}</Text></View>
        </View>
    </View>);
}

export default Author