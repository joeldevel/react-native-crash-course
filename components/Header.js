import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

export default function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create( {
  header : {
    height: 60,
    padding: 15,
    backgroundColor: 'darkslateblue',

  },
  text: {
    color: 'white',
    fontSize: 23,
    textAlign: 'center'
  }
});
