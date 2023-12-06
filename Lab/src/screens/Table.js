import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, DataTable } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyTable = () => {
  const data = [
    { email: 'ali@gmail.com', name: 'Ali Khan', country: 'Pakistan' },
    { email: 'noman@gmail.com', name: 'Noman Ali', country: 'Afghanistan' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>
        <Card>
          <Card.Content>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Email</DataTable.Title>
                <DataTable.Title>Name</DataTable.Title>
                <DataTable.Title>Country</DataTable.Title>
              </DataTable.Header>

              {data.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell>Select</DataTable.Cell>
                  <DataTable.Cell>{item.email}</DataTable.Cell>
                  <DataTable.Cell>{item.name}</DataTable.Cell>
                  <DataTable.Cell>{item.country}</DataTable.Cell>
                </DataTable.Row>
              ))}
            </DataTable>
          </Card.Content>
        </Card>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop:80
  },
  cardContainer: {
    marginVertical: 10,
  },
});

export default MyTable;
