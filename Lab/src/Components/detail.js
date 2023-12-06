import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const UserProfile = () => {
  const [userData, setUserData] = useState({
    email: 'user@example.com',
    name: 'John Doe',
    country: 'United States',
    gender: 'Male',
    subjects: 'Math, Science',
    skills: 'React Native, JavaScript',
    address: '123 Main St, Cityville',
  });

  const handleEdit = () => {
    
    console.log('Edit button clicked');
  };

  const handleDelete = () => {
    
    console.log('Delete button clicked');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text>Email: {userData.email}</Text>
          <Text>Name: {userData.name}</Text>
          <Text>Country: {userData.country}</Text>
          <Text>Gender: {userData.gender}</Text>
          <Text>Subjects: {userData.subjects}</Text>
          <Text>Skills: {userData.skills}</Text>
          <Text>Address: {userData.address}</Text>
        </Card.Content>
        <Card.Actions style={styles.cardActions}>
          <Button icon="pencil" mode="contained" onPress={handleEdit} style={styles.editButton}>
            Edit
          </Button>
          <Button icon="delete" mode="contained" onPress={handleDelete} style={styles.deleteButton}>
            Delete
          </Button>
        </Card.Actions>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    marginTop:180
  },
  card: {
    marginVertical: 10,
  },
  cardActions: {
    justifyContent: 'flex-end',
  },
  editButton: {
    marginLeft: 10,
    backgroundColor: '#2196F3', // Blue color, you can customize this
  },
  deleteButton: {
    marginLeft: 10,
    backgroundColor: '#FF5733', // Orange color, you can customize this
  },
});

export default UserProfile;
