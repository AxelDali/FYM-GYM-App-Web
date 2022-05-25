import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, setDoc, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore'

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

export const addDocument = async (resource, object) => {
  const docRef = await addDoc(collection(db, resource), { ...object })
  return docRef
}

export const updateDocument = async (resource, id, object) => {
  const docRef = await setDoc(doc(db, resource, id), { ...object })
  return docRef
}

export const getDocument = async (resource, id) => {
  const docSnap = await getDoc(doc(db, resource, id))
  return docSnap.data()
}

export const getCollection = async (resource) => {
  const docs = []
  const querySnapshot = await getDocs(collection(db, resource))
  querySnapshot.forEach((doc) => {
    console.log({ id: doc.id, ...doc.data() })
    docs.push({ id: doc.id, ...doc.data() })
  })
  return docs
}

export const deleteDocument = async (resource, id) => {
  await deleteDoc(doc(db, resource, id))
}
