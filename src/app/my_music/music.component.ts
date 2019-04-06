import {Component,OnInit,ViewChild} from '@angular/core';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Component({
    selector:'my_music',
    templateUrl:'music.component.html',
    styleUrls:['music.component.css']
})
export class MusicComponent implements OnInit{
   apiRoot:string = 'https://itunes.apple.com/search';
   @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
   @ViewChild('albumArt') albumArt;
   
   public search_list;
   
   constructor(private http:HttpClient){
      console.log('constructor function');
   }

   ngOnInit(){
      let url = `${this.apiRoot}`;
      let headers = new HttpHeaders();
      let params = new HttpParams();
      params = params.append('term', 'james blunt');
      params = params.append('media', 'music');
      params = params.append('limit', '50');
      this.http.get(url,{headers,params}).subscribe(res =>{ 
         this.search_list = res ;
         console.log(this.search_list.results[0].artworkUrl30);
         let albumPic = this.search_list.results[0].artworkUrl30;
         albumPic = albumPic.replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
         console.log(albumPic);
         this.albumArt.nativeElement.style.backgroundImage = "url("+albumPic+")";
      });
   }

   musicListActions(data){
      this.player.play(data.previewUrl);
   }
}