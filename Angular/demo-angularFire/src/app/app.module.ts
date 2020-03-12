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
import { UploadTaskComponent } from './upload-task/upload-task.component';
import { ImagesComponent } from './images/images.component';
import { ImageComponent } from './images/image/image.component';
import { ImageListComponent } from './images/image-list/image-list.component';
import { AppRoutingModule } from './app-routing.module';

const firebaseConfig = {
  apiKey: "AIzaSyD9VLzRq6DwX-CaCqkEhiGP-IH0TnSllbQ",
  authDomain: "c1019-dau-gia.firebaseapp.com",
  databaseURL: "https://c1019-dau-gia.firebaseio.com",
  projectId: "c1019-dau-gia",
  storageBucket: "c1019-dau-gia.appspot.com",
  messagingSenderId: "329990344373",
  appId: "1:329990344373:web:208a28cea912b5919ff8fc",
  measurementId: "G-J3RKWBQ4CY"
};
@NgModule({
  declarations: [
    AppComponent,
    DropzoneDirective,
    UploaderComponent,
    UploadTaskComponent,
    ImagesComponent,
    ImageComponent,
    ImageListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, AppRoutingModule // storage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
