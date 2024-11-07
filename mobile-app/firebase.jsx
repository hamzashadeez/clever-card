import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

// add firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBobKayeg3Rd3xm3w4Xe60Kn7PGu5nBVIc",
  authDomain: "aeadesign-af275.firebaseapp.com",
  projectId: "aeadesign-af275",
  storageBucket: "aeadesign-af275.appspot.com",
  messagingSenderId: "421618989988",
  appId: "1:421618989988:web:91cfa1fe4701128ea29f31",
  measurementId: "G-SNEZBS4QQ9"
};

// initialize firebase
const app = initializeApp(firebaseConfig);

// initialize auth; only for native platforms (Android and iOS)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export { auth };