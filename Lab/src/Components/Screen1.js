import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
  StyleSheet
} from 'react-native';
import { RadioButton, Checkbox } from 'react-native-paper';
import ModalDropdown from 'react-native-modal-dropdown';
import { FlatList } from 'react-native';

import { useNavigation } from '@react-navigation/native';

const TaskForm = () => {
  const [email,setEmail] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('male');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState([]);
  const [skills, setSkills] = useState('');
  const [address, setAddress] = useState('');
  const navigation = useNavigation();
  const [data, setData] = useState([]);

  const countries = [
    'Select a country',
    'Pakistan',
    'United States',
    'United Kingdom',
    'Canada',
    'Australia',
    'Germany',
    'France',
    'India',
    'Japan',
    'China',
  ];

  const subjects = ['Physics', 'Chemistru', 'Biology'];

  const handleSubjectToggle = (subject) => {
    const updatedSubjects = selectedSubjects.includes(subject)
      ? selectedSubjects.filter((s) => s !== subject)
      : [...selectedSubjects, subject];

    setSelectedSubjects(updatedSubjects);
  };


 const isPortrait = () => {
  const { height, width } = Dimensions.get('window');
  return height > width;
};

const styles = StyleSheet.create({
  container: {
   flex: 1,
   padding: 20,
   
 },
 row: {
   marginBottom: 20,
   marginRight:20,
   width: isPortrait() ? "auto" : "50%",
 },
 inline: {
   flexDirection: 'row',
   alignItems: 'center',
   marginBottom: 10,
 },
 input: {
   borderWidth: 1,
   borderColor: 'gray',
   borderRadius: 8,
   padding: 8,
 },
 dropdown: {
   width: '100%',
   borderWidth: 1,
   borderColor: 'gray',
   borderRadius: 8,
   padding: 8,
 },
 dropdownButton: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'center',
 },
 checkboxContainer: {
   flexDirection: 'row',
   marginBottom: 10,
 },
 submitButton: {
   backgroundColor: 'blue',
   padding: 10,
   borderRadius: 8,
   alignItems: 'center',
 },
 submitButtonText: {
   color: 'white',
   fontWeight: 'bold',
 },
});

const handleNav =()=>{
   const newData = [...data, { name, email, gender,selectedCountry, selectedSubjects, skills,address  }];
    setData(newData);
    navigation.navigate('nextPage', { data: data });
}
  return (
    <SafeAreaView style={{ flex: 1 , alignItems:"center",justifyContent:"center"}}>
      <View style={styles.container}>
        <View style={isPortrait() ? { flexDirection: 'column' } : { flexDirection: 'row',width:"100%" }}>

       <View style={styles.row}>
          <Text>Email</Text>
          <TextInput
            placeholder="30 characters max"
            maxLength={30}
            style={styles.input}
            onChangeText={((email)=>setEmail(email))}
          />
       </View>

        <View style={styles.row}>
          <Text>Name</Text>
          <TextInput
            placeholder="50 characters max"
            maxLength={50}
            style={styles.input}
            onChangeText={(n)=> setName(n)}
          />
        </View>
      </View>



        <View style={isPortrait() ? { flexDirection: 'column' } : { flexDirection: 'row' }}>

        <View style={styles.row}>
          <Text>Gender</Text>
          <View style={{flexDirection:"row"}}>
          <View style={styles.inline}>
            <RadioButton
              value="male"
              status={gender === 'male' ? 'checked' : 'unchecked'}
              onPress={() => setGender('male')}
            />
            <Text>Male</Text>
          </View>
          <View style={styles.inline}>
            <RadioButton
              value="female"
              status={gender === 'female' ? 'checked' : 'unchecked'}
              onPress={() => setGender('female')}
            />
            <Text>Female</Text>
          </View>
          </View>
        </View>

        <View style={styles.row}>
          <Text>Country</Text>
          <ModalDropdown
            options={countries}
            onSelect={(index, value) => setSelectedCountry(value)}
            style={styles.dropdown}
          >
            <View style={styles.dropdownButton}>
              <Text>{selectedCountry || 'Select a country'}</Text>
            </View>
          </ModalDropdown>
        </View>
        </View>
        <View style={isPortrait() ? { flexDirection: 'column' } : { flexDirection: 'row' }}>

        <View style={styles.row}>
          <Text>Subjects</Text>
          <View style={styles.checkboxContainer}>
            {subjects.map((subject) => (
              <View style={{flexDirection:"row", alignItems:"center"}}>
              <Checkbox
                key={subject}
                status={selectedSubjects.includes(subject) ? 'checked' : 'unchecked'}
                onPress={() => handleSubjectToggle(subject)}
              />
              <Text>{subject}</Text>
              </View>
            ))}
          </View>
        </View>

          <View style={styles.row}>
          <Text>Address</Text>
          <TextInput
            placeholder="Enter your address"
            multiline
            numberOfLines={4}
            style={[styles.input, { height: 100 }]}
            onChangeText={(text) => setAddress(text)}
          />
        </View>
        </View>
        <View style= {isPortrait()? {flexDirection:"column"}: {flexDirection:"row"}}>
        <View style={styles.row}>
          <Text>Skills</Text>
          <TextInput
            placeholder="Enter your skills"
            multiline
            numberOfLines={4}
            style={[styles.input, { height: 100 }]}
            onChangeText={(text) => setSkills(text)}
          />
        </View>
        
        <View>
        <TouchableOpacity style={styles.submitButton} onPress={handleNav}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
};



export default TaskForm;