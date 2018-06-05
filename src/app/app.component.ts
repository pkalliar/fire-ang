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

  constructor(private afStorage: AngularFireStorage, public afAuth: AngularFireAuth) { }

  upload(event) {
    this.afStorage.upload('test1/' + event.target.files[0].name, event.target.files[0]);  
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}
