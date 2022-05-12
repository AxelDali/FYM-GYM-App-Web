import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCnRdKALNDdOo2E2RLR0M8RPPKaeQN0fHk',
  authDomain: 'fym-gym-app.firebaseapp.com',
  projectId: 'fym-gym-app',
  storageBucket: 'fym-gym-app.appspot.com',
  messagingSenderId: '991207369570',
  appId: '1:991207369570:web:4d55afa2b2d04528dcda3b'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export const addEmployee = (name, date) => {
  addDoc(collection(db, 'employees'), {
    Name: name,
    Date: date
  })
}
