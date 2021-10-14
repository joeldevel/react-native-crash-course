import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function AddItem({title, addItem}) {
  const [text, setText] = useState("");

  const onChange = (textValue) => {
    setText(textValue);
  }

  return (
    <View>
      <TextInput placeholder="add item ..." style={styles.input}
                  onChangeText={onChange}/>
      <TouchableOpacity style={styles.btn}
              onPress={()=>addItem(text)}>
        <Text style={styles.btnText}>
          <Ionicons name="add" size={24} color="firebrick"/>
          Add item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create( {
  input: {
    heigth: 60,
    padding: 8,
    fontSize: 16
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center'
  }
});
