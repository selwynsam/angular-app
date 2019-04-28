import {NgModule} from '@angular/core';
import {MusicRoutingModule} from './music-routing.module';
import {CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {DurationPipe} from './duration.pipe';
import {MusicListingComponent} from '../shared/components/music_listing/music_list.component';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {MusicInfoComponent} from '../shared/components/music_info/music_info.component';
import {AudioPlayerService} from '../shared/services/audio_player.service';

@NgModule({
  declarations: [
    MusicRoutingModule.components,
    MusicListingComponent,
    AudioPlayerComponent,
    MusicInfoComponent,
    DurationPipe
  ],
  imports: [
            MusicRoutingModule,
            CommonModule,
            HttpClientModule
          ],
  providers: [AudioPlayerService]
})
export class MusicModule { }
