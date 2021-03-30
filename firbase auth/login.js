// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBUBHYAQkNsGdaxVF9L83AN-uxKmtsfmf8",
    authDomain: "clothing-shop-8cda5.firebaseapp.com",
    projectId: "clothing-shop-8cda5",
    storageBucket: "clothing-shop-8cda5.appspot.com",
    messagingSenderId: "796692414799",
    appId: "1:796692414799:web:8f1e3649d5d1a84c3a853a",
    measurementId: "G-R84045FKKG"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signIn(){
      var loginBtn=document.querySelector('.login-button');

      loginBtn.addEventListener('click',()=>{

        var email=document.getElementById('email');
        var password= document.getElementById('password');

        const promise = auth.signInWithEmailAndPassword(email.value,password.value);
        promise.catch(e=>alert(e.message));
        promise.then(()=>{
          window.location.assign('home.html');
        })
        
       
       
      })
  }
  signIn()
  


 
 

 

  

