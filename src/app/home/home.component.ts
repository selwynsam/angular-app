import {Component,OnInit} from '@angular/core';
import {SearchService} from '../shared/services/music.service';

@Component({
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [SearchService]
})

export class HomeComponent implements OnInit {

    public latestMusicList:any;
    public searchValue:string;
   
    constructor(private latestMusic:SearchService){
        console.log('home constructor');
    }

    ngOnInit(){
        this.latestMusic.getLatestMusic().subscribe(res =>{
            console.log(res);
            this.latestMusicList = res;
        });
    }

    searchMusic(){
        window.location.href = "./artist/"+this.searchValue;
    }
}