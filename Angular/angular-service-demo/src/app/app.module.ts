import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {IpComponent} from './ip.component';
import {HttpClientModule} from '@angular/common/http';
import { SimpleDictionaryComponent } from './simple-dictionary/simple-dictionary.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent,
        IpComponent,
        SimpleDictionaryComponent,
        TimelinesComponent,
        DictionaryPageComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
