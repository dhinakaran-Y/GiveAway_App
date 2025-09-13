  const firebaseConfig = {
    apiKey: "AIzaSyCgrVVjZn1rp2x7aGxHkToML_QWIkmX-CY",
    authDomain: "aestheticlearns-giveaway.firebaseapp.com",
    projectId: "aestheticlearns-giveaway",
    storageBucket: "aestheticlearns-giveaway.firebasestorage.app",
    messagingSenderId: "265299429901",
    appId: "1:265299429901:web:6eec50def7b91a34fae344",
    measurementId: "G-SPSL5V1DM4"
  };

  const COLLECTION_NAME ='requests'

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();

  // const person = {
  //   name : 'Dhina',
  //   age : 22 ,
  //   qualification : 'B.E-CSE'
  // }

  const createRecord = (record) => {
    return db
      .collection(COLLECTION_NAME)
      .add(record)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

  }

  const loginUser = (email , password) => {
    return new Promise((resolve , reject) => {
      auth
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;

          resolve(user)
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;

          reject({errorCode, errorMessage })
        });
    })
  }


  const getAllRequest = () => {
    return new Promise((resolve , reject) => {
      const result = db
        .collection(COLLECTION_NAME)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            return doc.data();
          });
          resolve(result)
        })
        .catch((e) => {
          console.log('error in getting.',e);
          reject(e)
        })
    })
  }
  