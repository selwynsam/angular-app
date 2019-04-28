import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {MusicListService} from '../../services/music_list.service';

@Component({
    'selector':'audio_player',
    'templateUrl':'audio_player.component.html',
    'styleUrls': ['audio_player.component.css'],
    'providers': []
})

export class AudioPlayerComponent implements OnInit{
    @ViewChild('myAudio') input;
    @Input() music_list: any = [];

    public trackId = 0;
    public selectedSong:any;

    constructor(private musicListService: MusicListService){}

    ngOnInit(){
        this.musicListService.getSelectedTrack().subscribe(
            (res) =>{
                if(res.is_defined){
                    this.play(res.data.previewUrl);
                }
        });
    }

    checkStatus(){
        
    }
    
    play(trackUrl){
        this.input.nativeElement.src = trackUrl;
        this.input.nativeElement.play();
    }

    playAll(){
        setTimeout(()=>{
            this.input.nativeElement.load();
            this.trackId = (this.trackId < this.music_list.resultCount-1)? this.trackId+1 : 0;
            this.selectedSong = this.music_list.results[this.trackId];
            this.play(this.selectedSong.previewUrl);
            this.musicListService.selectTrack(this.selectedSong);
        },2000);
    }

    pause(){

    }
}