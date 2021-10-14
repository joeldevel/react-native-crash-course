import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import {uuid} from 'uuidv4';

//components
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

export default function App() {
  const [items, setItems] = useState([
    {id:uuid(), text: 'bananas'},
    {id:uuid(), text: 'peaches'},
    {id:uuid(), text: 'potatoes'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(i => i.id != id);
    });
  }

  const addItem = (text) => {
    if (!text) {
      Alert.alert('Error', 'Plese enter an item', {
        text: 'OK'
      })
    } else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
      });
    }
  }
  return (
    <View style={styles.container}>
      <Header title="Shopping List"/>
      <AddItem addItem={addItem}/>
      <FlatList data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>}
      />
    </View>
  );
}
// padding is because some phones have that
// weird design
const styles = StyleSheet.create( {
  container : {
    flex: 1,
    paddingTop: 60
  }

})
