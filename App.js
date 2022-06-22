
import { FlatList,  StyleSheet } from 'react-native';
import Author from './src/components/Author';
import authors from './src/data/tp.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
const App=() =>{
  return (
    <FlatList
    data={authors}
    renderItem={Author} 
    keyExtractor={(item,index)=>index}/>
  );
}


export default App;