import {Component, ViewChild, Input} from '@angular/core';

@Component({
    'selector':'audio_player',
    'templateUrl':'audio_player.component.html',
    'styleUrls': ['audio_player.component.css']
})

export class AudioPlayerComponent{
    @ViewChild('myAudio') input;
    constructor(){
        console.log('audio player constructor');
    }

    play(file){
        this.input.nativeElement.src = file;
        this.input.nativeElement.play();
    }
}