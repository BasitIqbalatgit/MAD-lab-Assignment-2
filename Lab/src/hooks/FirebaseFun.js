import {db} from "../../firebaseConfig"

export const writeData = async ({data}) => {
    
    await setDoc(doc(db, "task", ), { emp });
    
  };