import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {IpComponent} from './ip.component';
import {HttpClientModule} from '@angular/common/http';
import { TimelinesComponent } from './timelines/timelines.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {AppRoutingModule} from './app-routing.module';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        IpComponent,
        TimelinesComponent,
        DictionaryPageComponent,
        YoutubePlaylistComponent,
        YoutubePlayerComponent,
        DictionaryDetailComponent
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
