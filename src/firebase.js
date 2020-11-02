import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyCyJaV5uq96Ul5_kUneGyXcXhB4r0Xfs7I',
	authDomain: 'discord-clone-5a100.firebaseapp.com',
	databaseURL: 'https://discord-clone-5a100.firebaseio.com',
	projectId: 'discord-clone-5a100',
	storageBucket: 'discord-clone-5a100.appspot.com',
	messagingSenderId: '46433535880',
	appId: '1:46433535880:web:b5e332b75445c922185c3d',
	measurementId: 'G-LXEEM0XV5C'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
