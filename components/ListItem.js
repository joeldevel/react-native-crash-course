import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {item.text}
        </Text>
        <Ionicons name="remove-circle" size={24} color="firebrick"
          onPress={()=> deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 25,
    backgroundColor: '#f8f8f8f',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  listItemText: {
    fontSize: 18
  }
})

export default ListItem;
