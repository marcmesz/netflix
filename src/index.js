import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import { App } from './app';
import { FirebaseContext } from './context/firebase';

const config = {
    apiKey: "AIzaSyD7S70-WCJXiI5p97uRIM7KClRc0uG1kyE",
    authDomain: "netflix-clone-3cccc.firebaseapp.com",
    projectId: "netflix-clone-3cccc",
    storageBucket: "netflix-clone-3cccc.appspot.com",
    messagingSenderId: "282524610324",
    appId: "1:282524610324:web:531b5f76c26ca29bd21c01",
    measurementId: "G-N5J04NYGQY"
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <h1>Hello</h1>
        <GlobalStyles />
        <App />
    </FirebaseContext.Provider>, 
    document.getElementById('root')
);
