import { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from 'firebase/firestore';
import { db } from '../../firebaseConfig'; 

const UseFirestore = () => {
  const [isLoading, setIsLoading] = useState(false);

  const addData = async (data) => {
    setIsLoading(true);
    try {
      const docRef = doc(db, 'persons', data.name); 
      await setDoc(docRef, data);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
    setIsLoading(false);
  };

  
  const retrieveData = async () => {
    setIsLoading(true);
    const querySnapshot = await getDocs(collection(db, 'persons'));
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({ id: doc.id, ...doc.data() });
    });
    setIsLoading(false);
    return data;
  };
const updateData = async (originalName, updatedData) => {
  setIsLoading(true);
  const docRef = doc(db, 'persons', originalName); 
  try {
    await updateDoc(docRef, updatedData); 
  } catch (error) {
    console.error('Error updating document: ', error);
  }
  setIsLoading(false);
};
  const deleteData = async (name) => {
    setIsLoading(true);
    const docRef = doc(db, 'persons', name); 
    try {
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
    setIsLoading(false);
  };
  return { addData, retrieveData, updateData, isLoading, deleteData };
};
export default UseFirestore;
