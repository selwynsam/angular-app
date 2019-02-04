import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import {HomeComponent} from './home/components/home.component';
// import {MusicList} from './home/components/music_list.component';
import {SidebarComponent} from './sidebar/siderbar.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
    // HomeComponent,
    // MusicList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
