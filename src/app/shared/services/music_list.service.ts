import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';

@Injectable()
export class MusicListService{
    
    private subject = new BehaviorSubject<any>({'is_defined':false});
    
    constructor(){}

    selectTrack(data){
        this.subject.next({'data': data, 'is_defined':true });
    }

    getSelectedTrack(){
        return this.subject.asObservable();
    }
}