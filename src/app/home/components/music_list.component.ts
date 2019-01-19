import {Component} from '@angular/core';
import {HomeService} from '../home.service';

@Component({
    moduleId:module.id,
    selector:'music-list', 
    templateUrl:'../templates/music_list.component.html',
    // template:`<ul>
    //             <li *ngFor="let music of music_list">
    //                 {{music.artist}}
    //             </li>
    //          </ul>`,
    providers:[HomeService]
})
export class MusicList{
    music_list=[];
    constructor(private _homeService:HomeService){
        this.music_list =_homeService.getData();
        console.log(this.music_list);
    }

    playMusic(){
        alert('play');
    }
}