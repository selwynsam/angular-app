import {Component,OnInit,ViewChild}  from '@angular/core';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';

@Component({
    selector:'favourites',
    templateUrl:'favourites.component.html',
    styleUrls:['../my_music/music.component.css'],
    providers:[SearchService]
})

export class FavouritesComponent{
    @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
    @ViewChild('albumArt') albumArt;

    public searchList: any;
    public artistName: string;
    public album: string;
    public nowPlaying: string;
    public genre: string;
    public trackId = 0;
    public albumPic: string;
    public pageStatus:boolean = true;
    public meta = {
        'showLike' : false,
        'showDelete':true
     }

    public musicInfo:any = [];

    constructor(private search:SearchService){
        console.log('favourites constructor');
    }

    ngOnInit(){
        
    }
}