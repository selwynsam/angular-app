import {Component} from '@angular/core';

@Component({
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls: ['home.component.css']
})

export class HomeComponent{
   
    constructor(){
        console.log('home constructor');
    }

    searchMusic(searchVal:string){
        window.location.href = "./artist/"+searchVal;
    }
}