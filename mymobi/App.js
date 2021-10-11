import React,{useState} from 'react';
import { StyleSheet, Text, View,Image,Button, Alert } from 'react-native';
import Header from './Header'

function App() {
  const [outputText, setText] = useState('Normal Button Text');
  const changeText = () => {
    setText('Test Native Button')
  }

  return (
    <View style={styles.container}>
      <Header/>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>My Native Test</Text>
      <Text>{outputText}</Text>
      <Button title="Alert Me" onPress={() => Alert.alert("Testing Native button")}></Button>
      <Button title="Click Me" onPress={changeText}></Button>
      <Button title="Revert Me" onPress={() => {setText('Normal Button Text')}}></Button>
      <Image
          style={styles.logo}
          source={{uri: 'https://i.ibb.co/pv8Kf4m/roseate.jpg'}}
        />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 166,
    height: 158,
  }
});
