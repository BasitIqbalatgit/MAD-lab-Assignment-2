// Card.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CardTwo = ({ item }) => {
  return (
    <View style={styles.cardContainer}>
      {Object.keys(item).map((key) => (
        <Text key={key}>{key}: {item[key]}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    margin: 8,
    borderWidth: 1,
    borderColor: 'deepskyblue',
  },
});

export default CardTwo;
