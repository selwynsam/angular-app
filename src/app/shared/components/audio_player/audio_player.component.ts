import {Component, ViewChild, Input, OnInit, OnDestroy } from '@angular/core';
import {AudioPlayerService} from '../../services/audio_player.service';
import {Subscription} from 'rxjs';

@Component({
    'selector':'audio_player',
    'templateUrl':'audio_player.component.html',
    'styleUrls': ['audio_player.component.css'],
    'providers': []
})

export class AudioPlayerComponent implements OnInit, OnDestroy{
    @ViewChild('myAudio') input;
    @Input() music_list: any = [];

    private getSelectedTrackSub: Subscription;
    private playTrackSub: Subscription;
    private playAllTrackSub: Subscription;
    private pauseTracSub: Subscription;


    public trackId = -1;
    public selectedSong:any;
    public playType:string;

    constructor(private audioPlayerService: AudioPlayerService){}

    ngOnInit(){
        this.getSelectedTrackSub = this.audioPlayerService.getSelectedTrack().subscribe(
            (res) =>{
                if(res.is_defined){
                    this.playTrackSource(res.data.previewUrl);
                }
        });

        this.playTrackSub    = this.audioPlayerService.playTrack$.subscribe(() => this.play());

        this.playAllTrackSub = this.audioPlayerService.playAllTrack$.subscribe(() => this.playAll());
        
        this.pauseTracSub    = this.audioPlayerService.pauseTrack$.subscribe(() => this.pause());

        this.input.nativeElement.onplay = () => this.play();

        this.input.nativeElement.onpause = () => this.pause();

    }
    
    playTrackSource(trackUrl){
        this.input.nativeElement.src = trackUrl;
        this.play();
    }

    playAll(){
        setTimeout(()=>{
            this.trackId = (this.trackId < this.music_list.resultCount-1)? this.trackId+1 : 0;
            this.selectedSong = this.music_list.results[this.trackId];
            this.playTrackSource(this.selectedSong.previewUrl);
            this.audioPlayerService.selectTrack(this.selectedSong);
        },2000);
    }

    play(){
        
        if(!this.input.nativeElement.src){
           this.playAll();
           return;
        }
        
        this.input.nativeElement.play();
        this.audioPlayerService.setPlayerStatus('playing');
    }

    pause(){
        this.input.nativeElement.pause();
        this.audioPlayerService.setPlayerStatus('paused');
    }

    ngOnDestroy(){
        
        this.input.nativeElement.pause();
        this.getSelectedTrackSub.unsubscribe();
        this.playTrackSub.unsubscribe();
        this.playAllTrackSub.unsubscribe();
        this.pauseTracSub.unsubscribe();
    }
}