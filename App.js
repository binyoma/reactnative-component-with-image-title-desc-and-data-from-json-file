
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Author from './src/components/Author';
import authors from './src/data/tp.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
const App=() =>{
  return (
    <ScrollView style={styles.container}>
       {authors.map((element, index) => {
        return(
          <Author title={element.title} index={index} img={element.img} desc={element.desc}></Author>
          )
      })}
    </ScrollView>
  );
}


export default App;