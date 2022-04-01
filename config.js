import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAvWCVf96lWn9x-SBlRrkayw-NzhLQAoz4",
  authDomain: "quizz-buzzer-app-439bb.firebaseapp.com",
  databaseURL: "https://quizz-buzzer-app-439bb-default-rtdb.firebaseio.com",
  projectId: "quizz-buzzer-app-439bb",
  storageBucket: "quizz-buzzer-app-439bb.appspot.com",
  messagingSenderId: "613856251752",
  appId: "1:613856251752:web:0d4d256dcaa121a106d0dd"
};

// Inicialize o Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()