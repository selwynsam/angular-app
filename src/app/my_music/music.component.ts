import {Component,OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';

@Component({
    selector:'my_music',
    templateUrl:'music.component.html',
    styleUrls:['music.component.css'],
    providers:[SearchService]

})
export class MusicComponent implements OnInit{
   @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
   @ViewChild('albumArt') albumArt;

   public searchList: any;
   public artistName: string;
   public album: string;
   public nowPlaying: string;
   public genre: string;
   public trackId = 0;
   public albumPic: string;
   public selectedItem: any;
   public pageStatus:boolean = true;
   public meta = {
      'showLike' : true,
      'showDelete':false
   }

   public musicInfo = [];
   private music_data = {
      'results' : [],
      'resultCount' : 0
   };
   
   constructor(private search:SearchService,
               private route: ActivatedRoute){
      console.log('constructor function');
   }

   ngOnInit(){
      //localStorage.setItem("music_data", JSON.stringify(this.music_data));
      const searchTerm = this.route.snapshot.paramMap.get('id');
      this.search.search(searchTerm).subscribe(res =>{ 
            console.log(res);
            if(res['resultCount'] > 0){
               this.searchList = res ;
               this.musicListActions(this.searchList.results[0]);
            }else{
               this.pageStatus = false;
            }
         });
   }

   musicListActions(data:any){

      this.selectedItem = data.trackId;
      this.musicInfo['artistName'] = data.artistName;

      this.musicInfo['albumPic'] = data.artworkUrl30;
      this.musicInfo['albumPic'] =  this.musicInfo['albumPic'].replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
      this.albumArt.nativeElement.style.backgroundImage = "url("+this.musicInfo['albumPic']+")";

      this.musicInfo['album'] = data.collectionName;
      this.musicInfo['genre'] = data.primaryGenreName;
      this.musicInfo['nowPlaying'] = data.trackName;
      this.player.play(data.previewUrl);
   }

   playNext(){
      this.trackId = (this.trackId < this.searchList.resultCount-1)? this.trackId+1 : 0;
      this.musicListActions(this.searchList.results[this.trackId]);
   }
}