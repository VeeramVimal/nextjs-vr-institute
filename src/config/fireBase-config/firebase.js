// import firebase, {initializeApp} from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import Config from "@/Config/index";
// const firebaseConfig = {
//     apiKey: Config.FIREBASE_API_KEY,
//     authDomain: Config.FIREBASE_AUTH_DOMAIN,
//     projectId: Config.FIREBASE_PROJECT_ID,
//     storageBucket: Config.FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
//     appId: Config.FIREBASE_APP_ID,
//     measurementId: Config.FIREBASE_MEASUREMENT_ID
// };

// // if (!firebase.apps.length) {
// //   firebase.initializeApp(firebaseConfig);
// // }

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export { db };

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Config from "@/Config/index";
const firebaseConfig = {
    apiKey: Config.FIREBASE_API_KEY,
    authDomain: Config.FIREBASE_AUTH_DOMAIN,
    projectId: Config.FIREBASE_PROJECT_ID,
    storageBucket: Config.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: Config.FIREBASE_MESSAGING_SENDER_ID,
    appId: Config.FIREBASE_APP_ID,
    measurementId: Config.FIREBASE_MEASUREMENT_ID
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
