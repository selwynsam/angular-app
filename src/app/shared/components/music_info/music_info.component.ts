import {Component,Input, OnInit} from '@angular/core';
import {AudioPlayerService} from '../../services/audio_player.service';

@Component({
    'selector': 'music_info_section',
    'templateUrl': 'music_info.component.html',
    'styleUrls': ['music_info.component.css'],
    'providers': []
})

export class MusicInfoComponent implements OnInit{

    @Input() musicInfo:any = [];

    public showPlayBtn: boolean = true;

    constructor(private audioPlayerService:AudioPlayerService){}

    ngOnInit(){
        this.audioPlayerService.getSelectedTrack().subscribe((res)=>{
            if(res.is_defined){
                this.musicInfo = res.data;
            }
        });
    }

    playAll(){
        this.audioPlayerService.playAllTrack();
        this.showPlayBtn = false;
    }

    pause(){
        this.audioPlayerService.pauseTrack();
        this.showPlayBtn = true;
    }
}