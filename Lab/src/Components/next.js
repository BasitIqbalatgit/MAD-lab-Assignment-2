// Home.js
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button } from 'react-native-elements';

const NextPage = ({ route, navigation }) => {
    const { data } = route.params;
  
    return (
      <View style={styles.container}>
      
        <FlatList
          data={data}
          renderItem={({ item }) => (
<Text>Name:{item.name}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
        <Button title="Go Back" onPress={() => navigation.goBack()} />
      </View>
    );
  };
  
  
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default NextPage;
