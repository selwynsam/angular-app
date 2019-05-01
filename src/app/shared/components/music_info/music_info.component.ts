import {Component,Input, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {AudioPlayerService} from '../../services/audio_player.service';
import {Subscription} from 'rxjs';

@Component({
    'selector': 'music_info_section',
    'templateUrl': 'music_info.component.html',
    'styleUrls': ['music_info.component.css'],
    'providers': []
})

export class MusicInfoComponent implements OnInit, OnDestroy{

    @ViewChild('play_btn') play_btn; 
    @Input() musicInfo:any = [];
    @Input() showFavBtn: boolean;


    private getSelectedTrackSub: Subscription;
    private getPlayerStatusSub: Subscription;

    public showPlayBtn: boolean = true;

    constructor(private audioPlayerService:AudioPlayerService){}

    ngOnInit(){
        this.getSelectedTrackSub = this.audioPlayerService.getSelectedTrack().subscribe((res)=>{
            if(res.is_defined){
                this.musicInfo = res.data;
            }
        });

        this.getPlayerStatusSub = this.audioPlayerService.getPlayerStatus().subscribe((res)=>{
            this.showPlayBtn = (res.playStatus == 'paused') ? true : false;
        });
    }

    playAll(){
        this.audioPlayerService.playTrack();
        this.showPlayBtn = false;
    }

    pause(){
        this.audioPlayerService.pauseTrack();
        this.showPlayBtn = true;
    }

    ngOnDestroy(){
        this.getSelectedTrackSub.unsubscribe();
        this.getPlayerStatusSub.unsubscribe();
    }
}