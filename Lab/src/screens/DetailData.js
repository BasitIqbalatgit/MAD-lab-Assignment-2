import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import UseFirestore from '../hooks/UseFirestore';

const DetailData = ({ navigation, route }) => {
  const { item } = route.params;
  const { deleteData } = UseFirestore();

  const handleEdit = () => {
    navigation.navigate('EditData', { item });
  };

  const handleDelete = async (name) => {
    await deleteData(name);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detailed Information</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.dataText}>{item.email}</Text>

        <Text style={styles.label}>Name:</Text>
        <Text style={styles.dataText}>{item.name}</Text>

        <Text style={styles.label}>Country:</Text>
        <Text style={styles.dataText}>{item.country}</Text>

        <Text style={styles.label}>Address:</Text>
        <Text style={styles.dataText}>{item.address}</Text>

        <Text style={styles.label}>Skills:</Text>
        <Text style={styles.dataText}>{item.skills}</Text>
        
        {/* Add more details as needed */}
      </View>

      <View style={styles.buttonContainer}>
        <Button
          mode='contained'
          onPress={handleEdit}
          style={styles.button}
          color='#fff'>
          Edit
        </Button>
        <Button
          mode='contained'
          onPress={() => handleDelete(item.name)}
          style={styles.button}
          color='#fff'>
          Delete
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
    color: '#3498db', // Updated color for the header
    fontWeight: 'bold',
  },
  dataContainer: {
    borderWidth: 1,
    borderColor: '#3498db', // Updated color for the border
    padding: 10,
    borderRadius: 8, // Added border radius for a rounded look
    marginBottom: 20,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3498db', // Updated color for the label
  },
  dataText: {
    marginBottom: 10,
    fontSize: 16, // Adjusted font size for better readability
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default DetailData;
