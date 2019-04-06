import {NgModule} from '@angular/core';
import {MusicRoutingModule} from './music-routing.module';
import {CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {DurationPipe} from './duration.pipe';
import {MusicListingComponent} from '../shared/components/music_listing/music_list.component';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';

@NgModule({
  declarations: [
    MusicRoutingModule.components,
    MusicListingComponent,
    AudioPlayerComponent,
    DurationPipe
  ],
  imports: [
            MusicRoutingModule,
            CommonModule,
            HttpClientModule
          ],
  providers: []
})
export class MusicModule { }
