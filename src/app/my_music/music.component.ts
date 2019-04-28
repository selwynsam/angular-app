import {Component,OnInit,ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AudioPlayerComponent} from '../shared/components/audio_player/audio_player.component';
import {SearchService} from '../shared/services/music.service';
import {MusicListService} from '../shared/services/music_list.service';

@Component({
    selector:'my_music',
    templateUrl:'music.component.html',
    styleUrls:['music.component.css'],
    providers:[SearchService,MusicListService]

})
export class MusicComponent implements OnInit{
   @ViewChild(AudioPlayerComponent) player: AudioPlayerComponent;
   
   public searchList: any;
   public pageStatus:boolean = true;
   public music_info:any = [];
   public meta = {
      'showLike' : true,
      'showDelete':false
   }

   private music_data = {
      'results' : [],
      'resultCount' : 0
   };
   
   constructor(private search:SearchService,
               private musicListService: MusicListService,
               private route: ActivatedRoute){
   }

   ngOnInit(){
      //localStorage.setItem("music_data", JSON.stringify(this.music_data));
      const searchTerm = this.route.snapshot.paramMap.get('id');
      this.search.search(searchTerm).subscribe(res =>{ 
            console.log(res);
            if(res['resultCount'] > 0){

               this.searchList = res ;

               this.searchList.results.map(data=>{
                  data['albumPic'] =  data['artworkUrl30'].replace(/\/[a-zA-z0-9\s\-\.]*$/i, "/300x300bb.jpg");
               });
               
               this.music_info = this.searchList.results[0];
               //this.musicListService.selectTrack(this.music_info);
               //this.musicListActions(this.searchList.results[0]);
            }else{
               this.pageStatus = false;
            }
         });
   }

   // playNext(){
   //    this.trackId = (this.trackId < this.searchList.resultCount-1)? this.trackId+1 : 0;
   //    this.musicListActions(this.searchList.results[this.trackId]);
   // }
}