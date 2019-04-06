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

   public searchList:any;
   public artistName:string;
   public album:string;
   public nowPlaying:string;
   public genre:string;
   
   constructor(private search:SearchService,
               private route: ActivatedRoute){
      console.log('constructor function');
   }

   ngOnInit(){
      const searchTerm = this.route.snapshot.paramMap.get('id');
      this.search.search(searchTerm).subscribe(res =>{ 
            console.log(res);
            this.searchList = res ;
            let albumPic = this.searchList.results[0].artworkUrl30;
            this.artistName = this.searchList.results[0].artistName;
            albumPic = albumPic.replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
            this.albumArt.nativeElement.style.backgroundImage = "url("+albumPic+")";
         });
   }

   musicListActions(data){
      this.album = data.collectionName;
      this.genre = data.primaryGenreName;
      this.nowPlaying = data.trackName;
      this.player.play(data.previewUrl);
   }
}