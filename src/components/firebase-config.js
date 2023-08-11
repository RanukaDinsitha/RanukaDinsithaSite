// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBz1cOIl2VUSqHQX9UZUnAki2l6Jwj2aY4',
	authDomain: 'site-ranuka.firebaseapp.com',
	projectId: 'site-ranuka',
	storageBucket: 'site-ranuka.appspot.com',
	messagingSenderId: '282562350693',
	appId: '1:282562350693:web:d0a299622e5dfe0fd8808c',
	measurementId: 'G-BLGW5FT08J'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)