import {Component,OnInit,ViewChild, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';
import {AudioPlayerService} from '../shared/services/audio_player.service';
import {Subscription} from 'rxjs';

@Component({
    selector:'favourites',
    templateUrl:'../my_music/music.component.html',
    styleUrls:['../my_music/music.component.css'],
    providers:[SearchService,AudioPlayerService]
})

export class FavouritesComponent{
    @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;

    private searchSubscription: Subscription;
    
    public searchList: any;
    public pageStatus:boolean = true;
    public music_info:any = [];
    public showFavBtn: boolean = false;
    public meta = {
        'showLike' : false,
        'showDelete':true
     }


     constructor(private search:SearchService,
        private audioPlayerService: AudioPlayerService,
        private route: ActivatedRoute){
    }

    ngOnInit(){
      
        this.searchSubscription = this.search.getFavouriteMusic().subscribe(res =>{ 
        
            if(res['resultCount'] > 0){

                this.searchList = res ;

                this.searchList.results.map(data=>{
                data['albumPic'] =  data['artworkUrl30'].replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
                });
                
                this.music_info = this.searchList.results[0];
            }else{
                this.pageStatus = false;
            }
        });
    }
  
    ngOnDestroy(){
        this.searchSubscription.unsubscribe();
    }
}