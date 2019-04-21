import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MusicComponent} from './music.component';
import {FavouritesComponent} from '../favourites/favourites.component';

const routes: Routes = [
    {path:'favourites',component: FavouritesComponent},
    {path:'',component: MusicComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class MusicRoutingModule { 
      static components = [MusicComponent,FavouritesComponent];
  }
  