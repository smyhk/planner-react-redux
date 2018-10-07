import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCNwEoEC4WD727ZWb9XWiK_A7pLZruxUHo',
  authDomain: 'marioplan-6de86.firebaseapp.com',
  databaseURL: 'https://marioplan-6de86.firebaseio.com',
  projectId: 'marioplan-6de86',
  storageBucket: 'marioplan-6de86.appspot.com',
  messagingSenderId: '449384226545'
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
