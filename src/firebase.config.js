import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {

}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
