import {Component, ViewChild, Input, OnInit} from '@angular/core';
import {AudioPlayerService} from '../../services/audio_player.service';

@Component({
    'selector':'audio_player',
    'templateUrl':'audio_player.component.html',
    'styleUrls': ['audio_player.component.css'],
    'providers': []
})

export class AudioPlayerComponent implements OnInit{
    @ViewChild('myAudio') input;
    @Input() music_list: any = [];

    public trackId = -1;
    public selectedSong:any;
    public playType:string;

    constructor(private audioPlayerService: AudioPlayerService){}

    ngOnInit(){
        this.audioPlayerService.getSelectedTrack().subscribe(
            (res) =>{
                if(res.is_defined){
                    this.play(res.data.previewUrl);
                }
        });

        this.audioPlayerService.playAllTrack$.subscribe(()=>{
            this.playAll();
        });
        
        this.audioPlayerService.pauseTrack$.subscribe(()=>this.pause());
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
            this.audioPlayerService.selectTrack(this.selectedSong);
        },2000);
    }

    pause(){
        this.input.nativeElement.pause();
    }
}