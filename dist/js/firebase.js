  const firebaseConfig = {
    apiKey: "AIzaSyCgrVVjZn1rp2x7aGxHkToML_QWIkmX-CY",
    authDomain: "aestheticlearns-giveaway.firebaseapp.com",
    projectId: "aestheticlearns-giveaway",
    storageBucket: "aestheticlearns-giveaway.firebasestorage.app",
    messagingSenderId: "265299429901",
    appId: "1:265299429901:web:6eec50def7b91a34fae344",
    measurementId: "G-SPSL5V1DM4"
  };

  const app = firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  // const person = {
  //   name : 'Dhina',
  //   age : 22 ,
  //   qualification : 'B.E-CSE'
  // }

  const createRecord = (record) => {
    return db
      .collection("Feedback")
      .add(record)
      .then((docRef) => {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });

  }