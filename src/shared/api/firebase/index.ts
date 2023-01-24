import { initializeApp } from 'firebase/app';
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDK_ZayeJuqzuMn7S8OMmnw_QzcvF2-Mhg',
  authDomain: 'art-portfolio-436e2.firebaseapp.com',
  projectId: 'art-portfolio-436e2',
  storageBucket: 'art-portfolio-436e2.appspot.com',
  messagingSenderId: '805384021648',
  appId: '1:805384021648:web:f6a5618d48c45904439a15',
};

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const storageRef = ref(storage);
const listRef = ref(storage, 'dream');

export { storage, storageRef, listRef };
