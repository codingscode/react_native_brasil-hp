
import firebase from 'firebase/app'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyAlskLOHyCtuH2WMtuh7zhcImiSXiBiIrs",
    authDomain: "meuapprnbrasil.firebaseapp.com",
    projectId: "meuapprnbrasil",
    storageBucket: "meuapprnbrasil.appspot.com",
    messagingSenderId: "670198124026",
    appId: "1:670198124026:web:4b4ba23d11a43f3c382843",
    measurementId: "G-7XDGQF9F4P"
}
  

if (!firebase.apps.length) {
    // abrir minha conexão
    firebase.initializeApp(firebaseConfig)   
}
 
export default firebase
