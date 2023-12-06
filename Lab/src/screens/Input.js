import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, RadioButton, TextInput } from 'react-native-paper';
import UseFirestore from '../hooks/UseFirestore';

const Input = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [country, setCountry] = useState('');
  const [gender, setGender] = useState('Male');
  const [skills, setSkills] = useState('');
  const [address, setAddress] = useState('');

  const { addData } = UseFirestore();

  const handleSubmit = async () => {
    console.log({ email, name, country, gender, skills, address });
    const formData = {
      email: email,
      name: name,
      country: country,
      gender: gender,
      skills: skills,
      address: address,
    };
    await addData(formData);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode='flat'
        label='Email'
        onChangeText={setEmail}
        style={styles.input}
        // theme={{ colors: { primary: '#3498db' } }}
      />
      <TextInput
        mode='outlined'
        label='Name'
        onChangeText={setName}
        style={styles.input}
        theme={{ colors: { primary: '#3498db' } }}
      />
      <TextInput
        mode='outlined'
        label='Country'
        onChangeText={setCountry}
        style={styles.input}
        theme={{ colors: { primary: '#3498db' } }}
      />
      <RadioButton.Group onValueChange={setGender} value={gender}>
        <RadioButton.Item label='Male' value='Male' />
        <RadioButton.Item label='Female' value='Female' />
      </RadioButton.Group>
      <TextInput
        mode='outlined'
        label='Skills'
        multiline={true}
        maxLines={5}
        onChangeText={setSkills}
        style={styles.input}
        theme={{ colors: { primary: '#3498db' } }}
      />
      <TextInput
        mode='outlined'
        label='Address'
        multiline={true}
        maxLines={5}
        onChangeText={setAddress}
        style={styles.input}
        theme={{ colors: { primary: '#3498db' } }}
      />
      <Button
        mode='contained'
        onPress={handleSubmit}
        style={styles.button}
        labelStyle={styles.buttonText}
        color='#fff'
      >
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#ecf0f1',
  },
  input: {
    marginBottom: 10,
    fontFamily: 'Arial', // Change to your preferred font family
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#3498db',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default Input;
