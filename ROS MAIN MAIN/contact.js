 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBN6cTAKURoi6Ou4RnMzF5XdOza_WD_pEw",
    authDomain: "genciti.firebaseapp.com",
    databaseURL: "https://genciti-default-rtdb.firebaseio.com",
    projectId: "genciti",
    storageBucket: "genciti.appspot.com",
    messagingSenderId: "512964262594",
    appId: "1:512964262594:web:129d5357209c977bdbd95b",
    measurementId: "G-RRWJ2RQR3W"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Reference messages collection
  var messageRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

//submit form
function submitForm(e) {
    e.preventDefault();

    //Get values
    var fname = getInputVal('fname');
    var cellno = getInputVal('cellno');
    var email = getInputVal('email');
    var Comment = getInputVal('Comment');

    //save message
    saveMessage(fname, cellno, email, Comment);
}

//Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

//save message to firebase
function saveMessage(fname, cellno, email, Comment) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        fname: fname,
        cellno: cellno,
        email: email,
        Comment: Comment
    });
}














// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.8.0/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyBN6cTAKURoi6Ou4RnMzF5XdOza_WD_pEw",
//     authDomain: "genciti.firebaseapp.com",
//     projectId: "genciti",
//     storageBucket: "genciti.appspot.com",
//     messagingSenderId: "512964262594",
//     appId: "1:512964262594:web:129d5357209c977bdbd95b",
//     measurementId: "G-RRWJ2RQR3W"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>

