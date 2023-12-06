import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import {
  TextInput,
  Button,
  Title,
  RadioButton,
  Checkbox,
  Text,
  DataTable,
} from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';
import db from '../firebaseConfig';

const Registration = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('male');
  const [subjects, setSubjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [address, setAddress] = useState('');
  const [users, setUsers] = useState([]);
  const [showUserData, setShowUserData] = useState(false);

  useEffect(() => {
    // Fetch any initial data
  }, []);

  const handleRegistration = async () => {
    try {
      const userId = id || uuidv4();
      const docRef = await addDoc(collection(db, 'users'), {
        id: userId,
        name,
        email,
        country,
        gender,
        subjects,
        skills,
        address,
      });

      console.log('Data sent to the database:', {
        id: userId,
        name,
        email,
        country,
        gender,
        subjects,
        skills,
        address,
      });

      // Clear the form
      setId('');
      setName('');
      setEmail('');
      setCountry('');
      setGender('male');
      setSubjects([]);
      setSkills([]);
      setAddress('');
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleViewUserData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'users'));
      const data = querySnapshot.docs.map((doc) => doc.data());
      setUsers(data);
      setShowUserData(true);
    } catch (error) {
      console.error('Error fetching user data: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Title style={styles.title}>User Registration</Title>

      <TextInput
        label="ID (Optional)"
        value={id}
        onChangeText={(text) => setId(text)}
        style={styles.input}
      />
      <TextInput
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        label="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />

      <Picker
        label="Country"
        selectedValue={country}
        onValueChange={(value) => setCountry(value)}
        style={styles.input}
      >
        <Picker.Item label="Select Country" value="" />
        <Picker.Item label="Country 1" value="country1" />
        <Picker.Item label="Country 2" value="country2" />
      </Picker>

      <Text style={styles.label}>Gender:</Text>
      <RadioButton.Group onValueChange={(value) => setGender(value)} value={gender}>
        <View style={styles.radioButtonContainer}>
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </View>
      </RadioButton.Group>

      <Text style={styles.label}>Subjects:</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="Web Technologies"
          status={subjects.includes('Web Technologies') ? 'checked' : 'unchecked'}
          onPress={() =>
            setSubjects((prevSubjects) => toggleCheckbox('Web Technologies', prevSubjects))
          }
        />
      </View>

      <Text style={styles.label}>Skills:</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox.Item
          label="Skill 1"
          status={skills.includes('Skill 1') ? 'checked' : 'unchecked'}
          onPress={() => setSkills((prevSkills) => toggleCheckbox('Skill 1', prevSkills))}
        />
      </View>

      <TextInput
        label="Address"
        value={address}
        onChangeText={(text) => setAddress(text)}
        multiline
        style={styles.input}
      />

      <Button mode="contained" onPress={handleRegistration} style={styles.button}>
        Register
      </Button>

      <Button mode="outlined" onPress={handleViewUserData} style={styles.button}>
        View User Data
      </Button>

      {showUserData && (
        <View>
          <Text style={styles.label}>User Data:</Text>
          <FlatList
            data={users}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View key={item.id} style={styles.userDataContainer}>
                <Text>{`Name: ${item.name}`}</Text>
                <Text>{`Email: ${item.email}`}</Text>
                {/* Add more fields as needed */}
              </View>
            )}
          />

          {/* Render data in a DataTable */}
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Email</DataTable.Title>
              <DataTable.Title>Country</DataTable.Title>
              <DataTable.Title>Skills</DataTable.Title>
              <DataTable.Title>Subjects</DataTable.Title>
              <DataTable.Title>Address</DataTable.Title>
            </DataTable.Header>

            {users.map((user) => (
              <DataTable.Row key={user.id}>
                <DataTable.Cell>{user.name}</DataTable.Cell>
                <DataTable.Cell>{user.email}</DataTable.Cell>
                <DataTable.Cell>{user.country}</DataTable.Cell>
                <DataTable.Cell>{user.skills.join(', ')}</DataTable.Cell>
                <DataTable.Cell>{user.subjects.join(', ')}</DataTable.Cell>
                <DataTable.Cell>{user.address}</DataTable.Cell>
                
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      )}
    </ScrollView>
  );
};

const toggleCheckbox = (value, array) => {
  if (array.includes(value)) {
    return array.filter((item) => item !== value);
  } else {
    return [...array, value];
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    marginVertical: 8,
  },
  button: {
    marginVertical: 16,
  },
  radioButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  checkboxContainer: {
    flexDirection: 'column',
    marginLeft: 8,
  },
  label: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  userDataContainer: {
    backgroundColor: '#eee',
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
});

export default Registration;