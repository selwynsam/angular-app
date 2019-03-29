import {NgModule} from '@angular/core';
import {MusicRoutingModule} from './music-routing.module';
import {CommonModule } from '@angular/common';
import {DurationPipe} from './duration.pipe';

@NgModule({
  declarations: [
    MusicRoutingModule.components,
    DurationPipe
  ],
  imports: [
            MusicRoutingModule,
            CommonModule
          ],
  providers: []
})
export class MusicModule { }
