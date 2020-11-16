// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD_hgXBq7bicX92jwuQTuZaZZOTouSTN2E",
    authDomain: "camping-contact-form-entries.firebaseapp.com",
    databaseURL: "https://camping-contact-form-entries.firebaseio.com",
    projectId: "camping-contact-form-entries",
    storageBucket: "camping-contact-form-entries.appspot.com",
    messagingSenderId: "1061327326725",
    appId: "1:1061327326725:web:ee284bba283ffbcbdd566c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//Reference messages collections

var messagesref = firebase.database().ref('messages');

//Listen for form submit

document.getElementById('contactForm').addEventListener('submit',submitForm);

//Submit Form
function submitForm(e){
  e.preventDefault();

  //Get values

  var name = getInputVal('name');
  var numberofpeople = getInputVal('numberofpeople');
  var email = getInputVal('email');
  var phoneno = getInputVal('phoneno');
  var date = getInputVal('date');
  var payment = getInputVal('payment');
  var message = getInputVal('message');

 //Save Message
  saveMessage(name,numberofpeople,email,phoneno,date,payment,message);

//Show Alert

document.querySelector('.alert').style.display = 'block' ;

//Hide alert after 3 seconds

setTimeout(function(){
 document.querySelector('.alert').style.display = 'none' ;
},3000);

//Reset Form
document.getElementById('contactForm').reset();
}

//Function to get form values

function getInputVal(id){
  return document.getElementById(id).value;
}

//Save message to firebasejs

function saveMessage(name,numberofpeople,email,phoneno,date,payment,message){
  var newMessageRef = messagesref.push();

  newMessageRef.set({
    name:name,
    numberofpeople: numberofpeople,
    email:email,
    phoneno:phoneno,
    date:date,
    payment:payment,
    message:message
  });
}
