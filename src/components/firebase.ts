import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDml7qdZytZy6yDoLVL2iwqhfN54N4AiIQ",
  authDomain: "mobile-comparison-2490.firebaseapp.com",
  databaseURL: "https://mobile-comparison-2490-default-rtdb.firebaseio.com",
  projectId: "mobile-comparison-2490",
  storageBucket: "mobile-comparison-2490.appspot.com",
  messagingSenderId: "534197222677",
  appId: "1:534197222677:web:3946640c95d0bb2f31fd1c",
  measurementId: "G-GVP6RPKVGV",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// 1 : set the data
// function putData () {
//     set(ref(db ,'users/'),{
//       id : 1,
//       name : 'Harsh',
//     })
//   };
 
// 2 : authentication 

