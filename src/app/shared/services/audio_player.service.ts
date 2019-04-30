import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AudioPlayerService{
    
    private subject = new BehaviorSubject<any>({'is_defined':false});
    private playerStatus = new BehaviorSubject<any>({'playStatus': 'paused'});

    private playTrackSource = new Subject();
    private playAllTrackSource = new Subject();
    private pauseTrackSource = new Subject();

    playTrack$     = this.playTrackSource.asObservable();
    playAllTrack$  = this.playAllTrackSource.asObservable();
    pauseTrack$    = this.pauseTrackSource.asObservable();
    
    constructor(){}

    selectTrack(data){
        this.subject.next({'data': data, 'is_defined':true });
    }

    getSelectedTrack(){
        return this.subject.asObservable();
    }

    playTrack(){
        this.playTrackSource.next();
    }

    playAllTrack(){
        this.playAllTrackSource.next();
    }

    pauseTrack(){
        this.pauseTrackSource.next();
    }

    getPlayerStatus(){
        return this.playerStatus.asObservable();
    }

    setPlayerStatus(status){
        this.playerStatus.next({'playStatus': status});
    }
}