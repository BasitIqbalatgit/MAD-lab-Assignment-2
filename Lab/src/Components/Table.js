import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, DataTable } from 'react-native-paper';

const MyTable = () => {
  const data = [
    { email: 'ali@gmail.com', name: 'Ali Khan', country: 'Pakistan' },
    { email: 'noman@gmail.com', name: 'Noman Ali', country: 'Afghanistan' },
  ];

  return (
    <SafeAreaView>
    <View style={styles.container}>
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
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default MyTable;
