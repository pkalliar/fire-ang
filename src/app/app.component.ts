import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';
  user = null;

  constructor(private afStorage: AngularFireStorage, public afAuth: AngularFireAuth) { 

    this.user = {
      // email: '',
      password: ''
    };

    this.afAuth.auth.onAuthStateChanged(function(user) {
      if(user){
        console.log(JSON.stringify(user ));
      }
    });


    
    // document.getElementById('quickstart-sign-in').addEventListener('click', this.toggleSignIn, false);
    // document.getElementById('quickstart-sign-up').addEventListener('click', handleSignUp, false);
    // document.getElementById('quickstart-verify-email').addEventListener('click', sendEmailVerification, false);
    // document.getElementById('quickstart-password-reset').addEventListener('click', sendPasswordReset, false);

  }

  upload(event) {
    this.afStorage.upload('test1/' + event.target.files[0].name, event.target.files[0]);  
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider()); 
  }
  
  logout() {
    this.afAuth.auth.signOut();
  }

      /**
     * Handles the sign in button press.
     */
    toggleSignIn() {
      if (this.afAuth.auth.currentUser) {
        // [START signout]
        this.afAuth.auth.signOut();
        // [END signout]
      } else {
        var email = document.getElementById('email').textContent;
        var password = document.getElementById('password').textContent;
        if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
        // Sign in with email and pass.
        // [START authwithemail]
        this.afAuth.auth.signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
      }
      // document.getElementById('quickstart-sign-in').disabled = true;
    }
}
