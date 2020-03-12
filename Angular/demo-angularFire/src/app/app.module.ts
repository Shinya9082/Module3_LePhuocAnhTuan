import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppComponent } from './app.component';
import { DropzoneDirective } from './dropzone.directive';
import { UploaderComponent } from './uploader/uploader.component';

const firebaseConfig = {
  apiKey: "AIzaSyDnsD5RZG24TqQbhGFHZYSIDFwJ9_GHnKs",
  authDomain: "c1019g1-image-uploader.firebaseapp.com",
  databaseURL: "https://c1019g1-image-uploader.firebaseio.com",
  projectId: "c1019g1-image-uploader",
  storageBucket: "c1019g1-image-uploader.appspot.com",
  messagingSenderId: "488242159983",
  appId: "1:488242159983:web:1bf27c5ddbd010d45a489a",
  measurementId: "G-6F1PR99VS1"
};
@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
