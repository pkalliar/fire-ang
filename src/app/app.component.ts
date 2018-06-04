import { Component } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My First Angular App!';

  constructor(private afStorage: AngularFireStorage) { }

  upload(event) {
    this.afStorage.upload('test1/t1.jpg', event.target.files[0]);  
  }
}
