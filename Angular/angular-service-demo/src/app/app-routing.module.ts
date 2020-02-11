import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {TimelinesComponent} from './timelines/timelines.component';
import {YoutubePlaylistComponent} from './youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './youtube-player/youtube-player.component';
import {DictionaryPageComponent} from './dictionary-page/dictionary-page.component';
import {DictionaryDetailComponent} from './dictionary-detail/dictionary-detail.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  },
  {
    path: 'dictionary',
    component: DictionaryPageComponent,
    children: [
      {
        path: ':key',
        component: DictionaryDetailComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
