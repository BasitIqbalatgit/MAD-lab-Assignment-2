
import { useNavigation } from '@react-navigation/native';
import react, { useState, useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import UseFirestore from '../hooks/UseFirestore';


import { ActivityIndicator, Button } from 'react-native-paper';

const ShowData = () => {
  const navigation = useNavigation();
  const { retrieveData } = UseFirestore();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const retrievedData = await retrieveData();
      setData(retrievedData);
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {data.length === 0 ? (
        <ActivityIndicator style={styles.noDataText} size='large' />
      ) : (
        data.map((item, index) => (
          <View key={index} style={styles.dataRow}>
            <View style={styles.column}>
              <Text style={styles.dataLabel}>Email:</Text>
              <Text style={styles.dataText}>{item.email}</Text>
            </View>

            <View style={styles.column}>
              <Text style={styles.dataLabel}>Name:</Text>
              <Text style={styles.dataText}>{item.name}</Text>
            </View>

            {/* Add more fields in separate columns as needed */}

            <Button
  mode='contained'
  onPress={() => navigation.navigate('DetailData', { item })}
  style={styles.button}
  color='#3498db'>
  Select
</Button>

          </View>
        ))
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
  },
  dataRow: {
    flexDirection: 'row', // Arrange items in a row
    justifyContent: 'space-between', // Add space between columns
    alignItems: 'center', // Align items vertically in the center
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  column: {
    flex: 1, // Each column takes equal space
  },
  dataLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#3498db',
  },
  dataText: {
    fontSize: 16,
    marginBottom: 10,
  },
  noDataText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShowData;