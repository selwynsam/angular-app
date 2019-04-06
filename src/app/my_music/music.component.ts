import {Component,OnInit,ViewChild} from '@angular/core';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';

@Component({
    selector:'my_music',
    templateUrl:'music.component.html',
    styleUrls:['music.component.css'],
    providers:[SearchService]

})
export class MusicComponent implements OnInit{
   apiRoot:string = 'https://itunes.apple.com/search';
   @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
   @ViewChild('albumArt') albumArt;
   
   public search_list;
   
   constructor(private search:SearchService){
      console.log('constructor function');
   }

   ngOnInit(){
      this.search.search().subscribe(res =>{ 
            console.log(res);
            this.search_list = res ;
            let albumPic = this.search_list.results[0].artworkUrl30;
            albumPic = albumPic.replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
            this.albumArt.nativeElement.style.backgroundImage = "url("+albumPic+")";
         });
   }

   musicListActions(data){
      this.player.play(data.previewUrl);
   }
}