import { initializeApp } from 'firebase/app';
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCoFQqK_2bX5c1vSQXkQ7nBRNTqgs6P_l0',
    authDomain: 'fir-react-sample-4f1a5.firebaseapp.com',
    projectId: 'fir-react-sample-4f1a5',
    storageBucket: 'fir-react-sample-4f1a5.appspot.com',
    messagingSenderId: '817665513997',
    appId: '1:817665513997:web:0a45e6a859524045311344',
    measurementId: 'G-CB34BR0SNX',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
