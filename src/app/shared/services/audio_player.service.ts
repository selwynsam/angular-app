import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class AudioPlayerService{
    
    private subject = new BehaviorSubject<any>({'is_defined':false});

    private playAllTrackSource = new Subject();
    private pauseTrackSource = new Subject();


    playAllTrack$  = this.playAllTrackSource.asObservable();
    pauseTrack$    = this.pauseTrackSource.asObservable();
    
    constructor(){}

    selectTrack(data){
        this.subject.next({'data': data, 'is_defined':true });
    }

    getSelectedTrack(){
        return this.subject.asObservable();
    }

    playAllTrack(){
        this.playAllTrackSource.next();
    }

    pauseTrack(){
        this.pauseTrackSource.next();
    }
}