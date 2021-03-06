import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'artist/:id',loadChildren: './my_music/music.module#MusicModule'},
  {path:'my_music',loadChildren: './my_music/music.module#MusicModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
