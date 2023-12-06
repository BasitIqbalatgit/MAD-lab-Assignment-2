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
                <DataTable.Title style={styles.headerCell}>Email</DataTable.Title>
                <DataTable.Title style={styles.headerCell}>Name</DataTable.Title>
                <DataTable.Title style={styles.headerCell}>Country</DataTable.Title>
              </DataTable.Header>

              {data.map((item, index) => (
                <DataTable.Row key={index}>
                  <DataTable.Cell style={styles.dataCell}>{item.email}</DataTable.Cell>
                  <DataTable.Cell style={styles.dataCell}>{item.name}</DataTable.Cell>
                  <DataTable.Cell style={styles.dataCell}>{item.country}</DataTable.Cell>
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
  },
  cardContainer: {
    marginVertical: 10,
  },
  headerCell: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dataCell: {
    fontSize: 14,
  },
});

export default MyTable;
