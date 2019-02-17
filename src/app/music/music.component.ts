import {Component,OnInit} from '@angular/core';

@Component({
    selector:'music_list',
    templateUrl:'music.component.html'
})
export class MusicComponent{
    constructor(){
        console.log('constructor function');
    }

    ngOnInit(){
        console.log('on init function');
    }
}